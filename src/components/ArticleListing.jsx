import { Card, Box, Typography } from '@mui/material';
import { UilClock, UilThumbsUp, UilComment } from '@iconscout/react-unicons';

const ArticleListing = ({ article }) => {
  return (
    <Card sx={{ p: 3, display: 'flex', gap: 1, flexDirection: 'column', bgcolor: '#DAE1F1' }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" gap={2} alignItems="center">
          <img src={article.author.image} alt={article.author.name} />
          <Box>
            <Typography variant="body2">{article.author.name}</Typography>
            <Typography variant="caption">{article.date}</Typography>
          </Box>
        </Box>

        <UilClock />
      </Box>

      <Box>
        <Typography variant="h5" sx={{ mb: 2 }}>
          {article.header}
        </Typography>
        <Typography variant="h6">{article.content}</Typography>
      </Box>

      {article.person && (
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2">With the help of: {article.person}</Typography>
        </Box>
      )}

      <Box display="flex" gap={2} mt={2}>
        <Box display="flex" alignItems="center">
          <UilThumbsUp />
          <Typography variant="body2">{article.likes}</Typography>
        </Box>
        {!article.restrictComments && (
          <Box display="flex" alignItems="center">
            <UilComment />
            <Typography variant="body2">{article.comments}</Typography>
          </Box>
        )}

        {article.location && (
          <Card
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              px: 2,
              bgcolor: '#004FFF',
              color: 'white',
            }}
          >
            {article.location}
          </Card>
        )}
        {article.tag && (
          <Card
            sx={{
              width: 'fit-content',
              height: 'fit-content',
              px: 2,
              bgcolor: '#9D15E5',
              color: 'white',
            }}
          >
            {article.tag}
          </Card>
        )}
      </Box>
    </Card>
  );
};

export default ArticleListing;
