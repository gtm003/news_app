import { useRouter } from "next/router";
import { INews } from "../types/news";
import styles from "../styles/NewsCards.module.scss";
import { Box, Card, Typography } from "@mui/material";
import { formatDate } from "../helpers/formatDate";

interface NewsProps {
  news: INews[];
}

function createMarkup(dis: string) {
  return { __html: dis };
}

const News: React.FC<NewsProps> = ({ news }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Typography variant="h3" className={styles.title}>
        Новости и события
      </Typography>
      <div className={styles.cards}>
        {news &&
          news.map((item) => {
            console.log();
            return (
              <Card
                key={item.id}
                className={styles.card}
                onClick={() => router.push("/news/" + item.id)}
              >
                <Box className={styles.image}>
                  <img src={item.image_big} alt={item.image_big} />
                </Box>
                <Typography className={styles.date}>
                  {formatDate(item.creation_date)}
                </Typography>
                <div
                  className={styles.discription}
                  dangerouslySetInnerHTML={createMarkup(item.lead)}
                />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default News;
