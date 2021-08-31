import { NavLink, Link } from "react-router-dom";
import { Flex, Box, Card } from "../ui";
import logo from "./images/cofidoc-black.png";
import { Text } from "rebass";
import Avatar from "@material-ui/core/Avatar";
import { useEffect, useState } from "react";
import { getLocalStorageUser } from "src/utils/localStorage";

export function AppShell({ children }) {
  return (
    <Box display="flex" width="100%">
      <Box width="215px" height="100vh" position="fixed">
        <Box
          display="flex"
          height="100%"
          flexDirection="column"
          sx={{ position: "relative" }}
        >
          <Box
            display="flex"
            mt={4}
            p={4}
            alignItems="center"
            justifyContent="center"
          >
            <img src={logo} alt="logo" width="100%" />
          </Box>

          <MenuLink to="/">Liste des cotations</MenuLink>
          <MenuLink to="/linked-act">Association de cotations</MenuLink>
          <MenuLink to="/decision">Arbre de décision</MenuLink>

          <MenuLink to="/key-letter">Lettre Clé</MenuLink>
          <MenuLink to="/coefficient">Coefficient</MenuLink>
          <MenuLink to="/increase">Majoration</MenuLink>

          <Flex
            flexDirection="column"
            justifyContent="flex-end"
            mb={2}
            height="100%"
          >
            <Profile />
          </Flex>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        p={3}
        width="100%"
        ml="200px"
        mt={2}
      >
        <Card>{children}</Card>
      </Box>
    </Box>
  );
}

function MenuLink({ children, to, ...props }) {
  return (
    <NavLink
      to={to}
      exact
      className="link"
      activeStyle={{ color: "#f72585", fontWeight: "bold" }}
      {...props}
    >
      {children}
    </NavLink>
  );
}

function Profile() {
  const [user, setUser] = useState<any>();

  useEffect(() => {
    const u = getLocalStorageUser();
    setUser(u);
  }, []);

  const getIntial = () => {
    return `${user?.firstname?.[0] || ""}${
      user?.lastname?.[0] || ""
    }`?.toUpperCase();
  };

  return (
    <Link to="/login">
      <Flex alignItems="center" px={2}>
        <Avatar>{getIntial()}</Avatar>
        <Text ml={2}>
          {user?.firstname} - {user?.lastname}
        </Text>
      </Flex>
    </Link>
  );
}
