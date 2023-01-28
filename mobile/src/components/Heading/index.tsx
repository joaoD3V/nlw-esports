import { View, Text, ViewProps } from 'react-native';

import { styles } from './styles';

type HeadingProps = {
  title: string;
  subtitle: string;
} & ViewProps;

export function Heading({ title, subtitle, ...rest }: HeadingProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}