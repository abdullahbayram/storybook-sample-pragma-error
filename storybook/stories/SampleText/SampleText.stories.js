import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { MonoText } from '../../../components/StyledText';

storiesOf('MonoText', module)
    .add('default view', () => (
        <MonoText
            text="Sample Text Story"
        />
    ));
