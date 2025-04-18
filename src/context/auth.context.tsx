import { useContext, createContext, useState, useEffect, useCallback } from "react";
import type { AuthResponse, User } from "@/types/auth.types";
import { api } from "@/helpers/axios.instance";
import { secureStorage } from "@/helpers/storage.secure";

// Definición del contexto
interface AuthContextType {
  isAuthenticated: boolean;
  getAccessToken: () => string | null;
  setAccessTokenAndRefreshToken: (accessToken: string, refreshToken: string) => void;
  getRefreshToken: () => string | null;
  saveUser: (userData: AuthResponse) => void;
  getUser: () => User | undefined;
  signout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Proveedor de autenticación
interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const [accessToken, setAccessToken] = useState<string>("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Obtener el access token actual
  const getAccessToken = useCallback(() => accessToken, [accessToken]);

  // Guardar usuario y tokens
  const saveUser = useCallback((userData: AuthResponse) => {
    setAccessTokenAndRefreshToken(userData.access_token, userData.refresh_token);
    setUser(userData.user);
    setIsAuthenticated(true);
  }, []);

  // Establecer tokens y actualizar headers de Axios
  const setAccessTokenAndRefreshToken = useCallback((accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    secureStorage.set("refresh_token", refreshToken);
    secureStorage.set("access_token", accessToken);
  }, []);

  // Obtener el refresh token
  const getRefreshToken = useCallback(() => {
    return secureStorage.get("refresh_token") || null;
  }, []);

  // Obtener información del usuario
  const getUser = useCallback(() => user, [user]);

  // Cerrar sesión
  const signout = useCallback(() => {
    secureStorage.remove("refresh_token");
    secureStorage.remove("access_token");
    setAccessToken("");
    setUser(undefined);
    setIsAuthenticated(false);
    delete api.defaults.headers.common["Authorization"];
  }, []);

  // Verificar autenticación al montar el componente
  const checkAuth = useCallback(async () => {
    try {
      const token = secureStorage.get("access_token");
      if (!token) {
        setIsLoading(false);
        return;
      }

      const userInfo = await retrieveUserInfo(token);
      setUser(userInfo);
      setIsAuthenticated(true);
    } catch (error) {
      console.log("Error en checkAuth:", error);
      signout();
    } finally {
      setIsLoading(false);
    }
  }, [signout]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        setAccessTokenAndRefreshToken,
        getRefreshToken,
        saveUser,
        getUser,
        signout,
      }}
    > 
      {isLoading ? <div>Cargando...</div> : children}
    </AuthContext.Provider>
  );
}

// Obtener información del usuario desde el API
async function retrieveUserInfo(accessToken: string) {
  try {
    const response = await api.get("/auth/user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error retrieving user info:", error);
    throw error;
  }
}

// Hook para usar el contexto
export const useAuth = () => useContext(AuthContext);