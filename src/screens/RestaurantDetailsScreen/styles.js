import { StyleSheet } from "react-native"; 

export default StyleSheet.create({
    page: {
      flex: 1,
    },  
    iconContainer: {
        position: 'absolute', 
        top: 40,
        left: 10,
    },
    image: {
      width: '100%',
      aspectRatio: 5/3,
    },

    title: {
      fontWeight: 'bold',
      fontSize: 35,
    },
    menuTitle: {
        marginVertical: 20,
        marginLeft: 20,
        fontSize: 18,
        letterSpacing: 0.7
    },
    subtitle: {
      color: 'gray',
      fontSize: 15,
      marginVertical: 10,
    },
    containerRestaurantDetail: {
        paddingVertical: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        borderBottomColor: "lightgray",
        borderBottomWidth: 1,
        flexDirection: 'row',
    }
  });