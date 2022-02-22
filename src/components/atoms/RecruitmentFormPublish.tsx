import { memo, VFC } from 'react';
import Fab from '@mui/material/Fab';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { StyledTooltip } from '../index';

type Props = {
  onClick: (isPublish: boolean) => void;
};

export const RecruitmentFormPublish: VFC<Props> = memo((props) => {
  const { onClick } = props;

  return (
    <StyledTooltip title="募集を公開">
      <Fab
        disableRipple
        size="small"
        type="submit"
        form="react-form"
        onClick={() => {
          onClick(true);
        }}
        sx={{ bgcolor: 'white', boxShadow: '0 10px 10px -1px #d1dede', px: 2.8, py: 2.8, color: '#26a69a' }}
      >
        <CreateOutlinedIcon />
      </Fab>
    </StyledTooltip>
  );
});