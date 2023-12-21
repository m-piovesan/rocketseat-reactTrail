import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
    isProfile?: boolean;
}

export function Avatar({ hasBorder = true, isProfile = false, ...props }: AvatarProps) {
    return (
        <img
            {...props}
            className={(hasBorder && isProfile) ? styles.avatarProfile :
                (hasBorder ? styles.avatarWithBorder : styles.avatar)}
        />
    );
}