import React from 'react';

import { Container, Top, Logo, Text } from "./style";

import Icon from 'react-native-vector-icons/MaterialIcons'

import logo from "../../assets/Nubank_Logo.png";

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Text>Matheus</Text>
      </Top>
      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  )
}