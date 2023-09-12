import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import tw from '../../utils/tailwind';
import Config from '../../global/Config';
import CountryPicker, {Country} from 'react-native-country-picker-modal';
import Loader from '../loader/Loader';

const InputField = ({
  required,
  label,
  value,
  onChange,
  icon,
  placeholder,
  className,
  outlineColor,
  multiline,
  rows,
  disabled,
  maxLength,
  type,
  focusIcon,
  clear,
  errorMessage,
  onBlur,
  key,
  capitalize,
  isPhoneNumber,
  countryCode,
  setCountryCode,
  success,
}: {
  required?: boolean;
  multiline?: boolean;
  label?: string;
  placeholder: string;
  className?: string;
  value: string;
  outlineColor?: string;
  onChange?: (value: any) => void;
  clear?: () => void;
  icon?: any;
  focusIcon?: any;
  rows?: number;
  maxLength?: number;
  disabled?: boolean;
  type?: 'email-address' | 'numeric' | 'default' | 'password';
  errorMessage?: any;
  onBlur?: (e: any) => void;
  key?: string;
  countryCode?: any;
  capitalize?: boolean;
  isPhoneNumber?: boolean;
  setCountryCode?: any;
  success?: string;
}) => {
  const [focused, setFocused] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHidden, setIsHidden] = useState(true);
  const [inputType, setInputType] = useState(type);
  const onSelectCountryCode = (country: Country) => {
    setCountryCode(country);
  };
  const handleVisibility = () => {
    if (inputType === 'password') {
      setInputType('default');
      setIsHidden(false);
    } else {
      setInputType('password');
      setIsHidden(true);
    }
  };

  return (
    <View
      style={tw`${
        isPhoneNumber ? 'flex-row gap-2 items-center justify-between' : ''
      }`}>
      {isPhoneNumber && (
        <TouchableOpacity
          onPress={() => {
            setIsActive(true);
          }}
          style={tw`flex-row gap-2 items-center justify-center border border-[#DBDEE2] w-[30%] py-[14px] -mt-2 rounded-lg`}>
          <Text style={tw`text-black`}>
            {(countryCode?.callingCode !== undefined &&
              countryCode?.callingCode &&
              '+' + countryCode?.callingCode) ||
              '+91'}
            &nbsp;&nbsp;
            {countryCode?.cca2 || 'IN'}
          </Text>
          <Image
            source={Config.darkSmallArrowDown}
            resizeMode="contain"
            style={tw`h-3 w-3`}
          />
        </TouchableOpacity>
      )}
      <View style={tw`relative ${isPhoneNumber ? 'w-[66%]' : ''}`}>
        <TextInput
          key={key}
          theme={{roundness: 8}}
          style={tw`w-full pl-5 ${
            disabled ? 'bg-[#F3F5F6] font-bold' : 'bg-white'
          } ${className ?? ''}`}
          label={
            focused || value ? (
              <Text
                style={tw`font-medium ${
                  !label ? 'bg-transparent' : 'bg-white'
                } ${errorMessage ? 'text-[#CC3535]' : ''}`}>
                {label}
                {required && <Text style={tw`text-[#FF4538]`}> *</Text>}
              </Text>
            ) : (
              ''
            )
          }
          onFocus={() => setFocused(true)}
          onBlur={e => {
            setFocused(false);
            onBlur && onBlur(e);
          }}
          value={value}
          onChangeText={onChange}
          mode="outlined"
          outlineColor={errorMessage ? '#CC3535' : outlineColor ?? '#DBDEE2'}
          activeOutlineColor={errorMessage ? '#CC3535' : 'black'}
          placeholder={placeholder}
          multiline={multiline}
          numberOfLines={rows}
          disabled={disabled}
          maxLength={maxLength}
          keyboardType={inputType === 'password' ? 'default' : inputType}
          secureTextEntry={inputType === 'password' && true}
          textColor={disabled ? '#8B96A2' : ''}
          placeholderTextColor="#8B96A2"
          clearTextOnFocus={true}
          autoCapitalize={capitalize ? 'characters' : 'none'}
        />

        {errorMessage && errorMessage.length > 0 ? (
          <Text style={tw`text-[#CC3535] text-[10px] text-right`}>
            {errorMessage}
          </Text>
        ) : (
          <Text style={tw`text-white text-[10px] text-right opacity-0`}>.</Text>
        )}
        {icon && (
          <Image
            style={tw`absolute top-[26px] ml-3 h-[13px] w-[13px]`}
            resizeMode="contain"
            source={focusIcon && focused ? focusIcon : icon}
          />
        )}
        {!errorMessage && (
          <View
            style={tw`right-3 top-[13px] w-5 items-center flex z-10 absolute`}>
            {success === 'show' ? (
              <Image
                style={tw`h-[14px] w-[14px] mt-3`}
                resizeMode="contain"
                source={Config.success}
              />
            ) : success === 'hide' ? (
              <Loader className="bg-transparent mt-[6px] shadow-none" />
            ) : null}
          </View>
        )}
        {success === 'password' && value && (
          <View
            style={tw`right-3 top-[13px] w-5 items-center flex z-10 absolute`}>
            <TouchableOpacity onPress={handleVisibility}>
              <Image
                style={tw`h-[14px] w-[14px] mt-3`}
                resizeMode="contain"
                source={isHidden ? Config.show : Config.hide}
              />
            </TouchableOpacity>
          </View>
        )}

        {!disabled && !success && (
          <TouchableOpacity
            onPress={clear}
            style={tw`right-3 top-[13px] w-5 items-center flex z-10 absolute`}>
            {value?.length > 0 && !errorMessage && (
              <Text style={tw`text-2xl text-[#8B96A2]`}>&times;</Text>
            )}
            {errorMessage && (
              <Image
                style={tw`h-[14px] w-[14px] mt-3`}
                resizeMode="contain"
                source={Config.error}
              />
            )}
          </TouchableOpacity>
        )}
      </View>

      {/* <CustomModal isActive={isActive} close={() => setIsActive(false)}>
        <CountryModal
          data={countryData}
          setSearch={e => setInput(e)}
          search={input}
          setSelected={e => setCountryCode(e)}
          close={() => setIsActive(false)}
        />
      </CustomModal> */}

      {isActive && (
        <TouchableOpacity>
          <CountryPicker
            withFilter
            modalProps={{style: {maxHeight: 10, maxWidth: 20}}}
            countryCode={countryCode}
            withCallingCodeButton
            withFlagButton={false}
            withFlag
            withModal
            withAlphaFilter
            withCallingCode
            onSelect={e => onSelectCountryCode(e)}
            onClose={() => setIsActive(false)}
            visible={true}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
