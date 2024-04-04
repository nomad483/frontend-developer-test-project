import { StyleSheet } from 'react-native'
import colors from 'app/theme/colors'

export default StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  toggle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginRight: 10,
    borderColor: colors.toggle.border
  },
  completed: {
    backgroundColor: colors.primary.main
  }
})
