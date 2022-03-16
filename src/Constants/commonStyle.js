import { StyleSheet,Platform, Dimensions } from 'react-native';


export default StyleSheet.create({
  loading: {
    width: Dimensions.get('screen').width,
    height:  Dimensions.get('screen').height,
    position: 'absolute',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:'30%'
}

});