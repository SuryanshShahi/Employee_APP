import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import tw from '../../utils/tailwind';

const Button = ({
  action,
  btnName,
  className,
  icon,
  disabled,
  bgColor,
  order,
  iconClass,
}: {
  action: () => void;
  btnName: string;
  className?: string;
  bgColor?: string;
  iconClass?: string;
  icon?: any;
  disabled?: boolean;
  order?: 'icon' | 'text';
}) => {
  return (
    <TouchableOpacity
      style={tw`flex-row items-center border-2 justify-center gap-3 px-8 py-2 shadow rounded-lg ${
        disabled ? 'bg-[#DBDEE2] border-[#DBDEE2]' : 'bg-black border-black'
      } ${bgColor ?? ''}`}
      onPress={disabled ? () => {} : action}>
      {order === 'icon' ? (
        <>
          {icon && (
            <Image
              style={tw`h-3 w-3 ${iconClass ?? ''}`}
              resizeMode="contain"
              source={icon}
            />
          )}
          <Text
            style={tw`font-medium text-center text-xs ${
              disabled ? 'text-[#8B96A2]' : 'text-white'
            } ${className ?? ''}`}>
            {btnName}
          </Text>
        </>
      ) : (
        <>
          <Text
            style={tw`font-medium text-center text-xs ${
              disabled ? 'text-[#8B96A2]' : 'text-white'
            } ${className ?? ''}`}>
            {btnName}
          </Text>
          {icon && (
            <Image
              style={tw`h-3 w-3 ${iconClass ?? ''}`}
              resizeMode="contain"
              source={icon}
            />
          )}
        </>
      )}
    </TouchableOpacity>
  );
};

export default Button;
