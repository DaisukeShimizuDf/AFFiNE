import { TEST_WORKSPACE } from '../common';
import {
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type LinkInvitationReviewDeclinedProps = {
  workspace: WorkspaceProps;
};

export default function LinkInvitationReviewDeclined(
  props: LinkInvitationReviewDeclinedProps
) {
  const { workspace } = props;
  return (
    <Template>
      <Title>参加リクエストが却下されました</Title>
      <Content>
        <P>
          <Workspace {...workspace} />{' '}
          への参加リクエストは、ワークスペース管理者によって却下されました。
        </P>
      </Content>
    </Template>
  );
}

LinkInvitationReviewDeclined.PreviewProps = {
  workspace: TEST_WORKSPACE,
};
