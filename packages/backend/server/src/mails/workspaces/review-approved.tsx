import { TEST_WORKSPACE } from '../common';
import {
  Button,
  Content,
  P,
  Template,
  Title,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type LinkInvitationApprovedProps = {
  workspace: WorkspaceProps;
  url: string;
};

export default function LinkInvitationApproved(
  props: LinkInvitationApprovedProps
) {
  const { workspace, url } = props;
  return (
    <Template>
      <Title>ワークスペースへようこそ！</Title>
      <Content>
        <P>
          <Workspace {...workspace} />{' '}
          への参加リクエストが承認されました。チームワークスペースにアクセスして、他のメンバーと共同作業ができます。
        </P>
      </Content>
      <Button href={url}>ワークスペースを開く</Button>
    </Template>
  );
}

LinkInvitationApproved.PreviewProps = {
  workspace: TEST_WORKSPACE,
  url: 'https://app.affine.pro',
};
