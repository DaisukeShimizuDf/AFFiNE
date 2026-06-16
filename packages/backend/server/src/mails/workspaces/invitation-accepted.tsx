import { TEST_USER, TEST_WORKSPACE } from '../common';
import {
  Button,
  Content,
  P,
  Template,
  Title,
  User,
  type UserProps,
  Workspace,
  type WorkspaceProps,
} from '../components';

export type InvitationAcceptedProps = {
  user: UserProps;
  workspace: WorkspaceProps;
  url: string;
};

export default function InvitationAccepted(props: InvitationAcceptedProps) {
  const { user, workspace, url } = props;
  return (
    <Template>
      <Title>{user.email} さんが招待を承諾しました</Title>
      <Content>
        <P>
          <User {...user} /> さんが <Workspace {...workspace} />{' '}
          に参加しました
        </P>
        <Button href={url}>ワークスペースのメンバーを開く</Button>
      </Content>
    </Template>
  );
}

InvitationAccepted.PreviewProps = {
  user: TEST_USER,
  workspace: TEST_WORKSPACE,
  url: 'https://app.affine.pro',
};
