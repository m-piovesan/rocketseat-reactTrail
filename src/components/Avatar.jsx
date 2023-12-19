import styles from './Avatar.module.css';

export function Avatar({ hasBorder = true, isProfile = false, src }) {
    return (
        <img
            src={src}
            className={(hasBorder && isProfile) ? styles.avatarProfile :
                (hasBorder ? styles.avatarWithBorder : styles.avatar)}
        />
    );
}