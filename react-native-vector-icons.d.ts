declare module 'react-native-vector-icons/Ionicons' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import { Component } from 'react';
  
    class Ionicons extends Component<IconProps> {}
    export default Ionicons;
  }
  
  declare module 'react-native-vector-icons/FontAwesome' {
    import { IconProps } from 'react-native-vector-icons/Icon';
    import { Component } from 'react';
  
    class FontAwesome extends Component<IconProps> {}
    export default FontAwesome;
  }
  
  // Add more declarations if you use other icon sets
  