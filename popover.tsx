import React from 'react';
import { View, Modal } from 'react-native';
import Button from '../../Atoms/Button';
import { useTheme } from '../../Core/Provider';
import styles from './styles';

export type PopoverProps = {
    onDismiss?: () => void;
    visible?: boolean;
};

type Props = {
    /**
     * @optional children for default bottomsheet
     */
    children?: React.ReactChild | React.ReactChild[];
    /**
     * @optional
     */
    theme?: ThemedUIComponents.Theme;
} & PopoverProps;

const Popover = ({
    children,
    visible,
    onDismiss,
    theme: propsTheme,
    ...props
}: Props) => {
    const { theme: hookTheme } = useTheme();
    const theme = propsTheme ?? hookTheme;
    const dismiss = () => {
        onDismiss && onDismiss();
    };
    return (
        <Modal
            visible={visible}
            onDismiss={dismiss}
            onRequestClose={dismiss}
            {...props}
        >
            <View style={styles.container}>
                <View style={[styles.modalView, {backgroundColor: theme.dark ? theme.colors.NEUTRAL[100] : theme.colors.SHADES.DEFAULT}]}>{children}</View>
                <Button
                    testID="Dismiss Button"
                    type="medium"
                    mode="text"
                    title="Dismiss"
                    style={styles.dismissButton}
                    labelStyle={{ color: 'white' }}
                    onPress={dismiss}
                />
            </View>
        </Modal>
    );
};
export default Popover;

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: DarkColors.NEUTRAL[50],
    },
    modalView: {
        marginHorizontal: SPACING.BIG,
        borderRadius: SPACING.BIG,
        padding: SPACING.MD,
        maxHeight: Dimensions.get('window').height - 256,
    },
    dismissButton: {
        marginTop: SPACING.XXX_BIG
    }
});
