import React, { FC } from 'react'
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle, StyleProp } from 'react-native'
import {
  COLOR_BUTTON_DEFAULT,
  PRIMARY_BUTTON_TEXT_DEFAULT,
  VERTICAL_PADDING_DEFAULT,
} from '../../constants'

export interface PrimaryButtonProps {
  currentPage?: number
  goToNextPage: () => void
  style?: StyleProp<ViewStyle>
  totalPages?: number
  text?: string
  textStyle: StyleProp<TextStyle>
  disabled?: boolean
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  goToNextPage,
  style,
  text = PRIMARY_BUTTON_TEXT_DEFAULT,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.button, style, disabled ? { opacity: 0.2 } : null]}
      onPress={goToNextPage}
      disabled={disabled}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_BUTTON_DEFAULT,
    width: '100%',
    borderRadius: 32,
    marginTop: VERTICAL_PADDING_DEFAULT,
    marginBottom: VERTICAL_PADDING_DEFAULT,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    paddingVertical: 16,
  },
})
