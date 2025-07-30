import { Routes, Route, Navigate } from "react-router-dom";
import HomeScreen from "./screen/HomeScreen";
import LoginScreen from "./screen/LoginScreen";
import { ProfileScreen } from "./screen/ProfileScreen";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";

const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      {/* Protected Home Route */}
      <Route
        path="/"
        element={user ? <HomeScreen /> : <Navigate to="/login" />}
      />

      {/* Login Route */}
      <Route
        path="/login"
        element={!user ? <LoginScreen /> : <Navigate to="/" />}
      />
      {/* Profile Route */}
      <Route
        path="/profile"
        element={user ? <ProfileScreen /> : <Navigate to="/login" />} />
    </Routes>
  );
};

export default App;
