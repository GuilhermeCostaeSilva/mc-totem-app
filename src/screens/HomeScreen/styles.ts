import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: { flex: 1, padding: 20 },
  header: { flexDirection: 'column', alignItems: 'center' },
  mcIcon: { width: 100, height: 100 },
  restaurantName: {
    fontSize: 24,
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Poppins-Bold'
  },
  homeDescriptionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: { fontSize: 28,  marginBottom: 10, fontFamily: 'Poppins-Bold' },
  homeDescription: {
    fontSize: 18,
    color: '#7E8392',
    paddingBottom: 50,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  },
  orderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
  },
  takeIn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderColor: '#E1E1E6',
    borderWidth: 1,
    borderRadius: 10,
    
  },
  takeOut: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderColor: '#E1E1E6',
    borderWidth: 1,
    borderRadius: 10,
  },
  takeInText: {
    marginTop: 10,
    fontSize: 16,
    backgroundColor: '#e7e5e4',
    borderRadius: 10,
    padding: 6,
    fontFamily: 'Poppins-Regular'
  },
  takeOutText: {
    textAlign: 'center',
    width: 120,
    marginTop: 10,
    fontSize: 16,
    backgroundColor: '#e7e5e4',
    borderRadius: 10,
    padding: 6,
    fontFamily: 'Poppins-Regular'
  },
});
