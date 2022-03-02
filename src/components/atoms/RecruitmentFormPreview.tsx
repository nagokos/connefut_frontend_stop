import { memo, VFC } from 'react';
import Fab from '@mui/material/Fab';
import PageviewOutlinedIcon from '@mui/icons-material/PageviewOutlined';
import { StyledTooltip } from '../index';

export const RecruitmentFormPreview: VFC = memo(() => {
  return (
    <StyledTooltip title="プレビュー">
      <Fab
        disableRipple
        size="small"
        sx={{ bgcolor: 'white', boxShadow: '0 10px 10px -1px #d1dede', px: 2.8, py: 2.8, color: '#26a69a' }}
      >
        <PageviewOutlinedIcon />
      </Fab>
    </StyledTooltip>
  );
});
