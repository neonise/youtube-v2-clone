import { Box, Stack } from "@mui/material";
import ChannelCard from "../components/ChannelCard";
import VideoCard from "../components/VideoCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && (
            <ChannelCard channelDetail={video} marginTop="0" />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
