import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import McIcon from '../../icons/mc_icon.png';
import McBurguer from '../../images/mc_burguer.png';
import TakeOut from '../../images/take_out.png';

export const HomeScreen: React.FC = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image style={styles.mcIcon} source={McIcon} />
        <Text style={styles.restaurantName}>Fsw Donald's</Text>
      </View>
      <View style={styles.homeDescriptionContainer}>
        <Text style={styles.title}>Seja bem-vindo!</Text>
        <Text style={styles.homeDescription}>
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </Text>
      </View>
      <View style={styles.orderContainer}>
        <TouchableOpacity>
          <View style={styles.takeIn}>
            <Image source={McBurguer} />
            <Text style={styles.takeInText}>Comer aqui</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.takeOut}>
            <Image source={TakeOut} />
            <Text style={styles.takeOutText}>Para levar</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
