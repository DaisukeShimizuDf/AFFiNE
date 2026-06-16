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

export type LinkInvitationReviewRequestProps = {
  workspace: WorkspaceProps;
  user: UserProps;
  url: string;
};

export default function LinkInvitationReviewRequest(
  props: LinkInvitationReviewRequestProps
) {
  const { workspace, user, url } = props;
  return (
    <Template>
      <Title>
        <Workspace {...workspace} size={24} /> への参加リクエスト
      </Title>
      <Content>
        <P>
          <User {...user} /> さんが <Workspace {...workspace} />{' '}
          への参加をリクエストしました。
          <br />
          ワークスペースのオーナー／管理者として、このリクエストを承認または却下できます。
        </P>
        <Button href={url}>リクエストを確認する</Button>
      </Content>
    </Template>
  );
}

LinkInvitationReviewRequest.PreviewProps = {
  workspace: TEST_WORKSPACE,
  user: TEST_USER,
  url: 'https://app.affine.pro',
};
