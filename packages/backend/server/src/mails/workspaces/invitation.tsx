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

export type InvitationProps = {
  user: UserProps;
  workspace: WorkspaceProps;
  url: string;
};

export default function Invitation(props: InvitationProps) {
  const { user, workspace, url } = props;

  return (
    <Template>
      <Title>ワークスペースに招待されました</Title>
      <Content>
        <P>
          <User {...user} /> さんが、あなたを <Workspace {...workspace} />{' '}
          に招待しました
        </P>
        <P>下のボタンをクリックしてワークスペースに参加してください</P>
        <Button href={url}>承諾して参加する</Button>
      </Content>
    </Template>
  );
}

Invitation.PreviewProps = {
  user: TEST_USER,
  workspace: TEST_WORKSPACE,
  url: 'https://app.affine.pro',
};
