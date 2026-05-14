import Image from "next/image";
import styles from "./BrotherCard.module.css";

type Props = {
  name: string;
  src: string;
  alt: string;
  role?: string;
};

export default function BrotherCard({ name, src, alt, role }: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.info}>
        <p className={styles.name}>{name}</p>
        {role && <p className={styles.role}>{role}</p>}
      </div>
    </div>
  );
}
