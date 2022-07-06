import { StyleSheet, StatusBar } from 'react-native';
import { COLOR } from '../../constant/theme';
const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: COLOR.WHITE,
    flex: 1,
  },
  imageContainer: {
    height: 200,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: { flex: 1, resizeMode: 'contain' },
  header: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: COLOR.LIGHT,
    marginHorizontal: 7,
    marginBottom: 7,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: COLOR.BLACK,
    marginBottom: 5,
    marginRight: 3,
  },
  priceTag: {
    backgroundColor: COLOR.PRIMARY,
    width: 80,
    height: 40,
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  borderBtn: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 40,
  },
  borderBtnText: { fontWeight: 'bold', fontSize: 28 },
  buyBtn: {
    width: 130,
    height: 50,
    backgroundColor: COLOR.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  counter: {
    position: 'absolute',
    right: -15,
    top: -10,
    backgroundColor: COLOR.ORANGE_DARK,

    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
