import {
  CastList,
  CastMember,
  MemberName,
  MemberImage,
  MemberCharacter,
} from './Cast.styled';

const Cast = () => {
  return (
    <CastList>
      <CastMember>
        <MemberImage></MemberImage>
        <MemberName></MemberName>
        <MemberCharacter>Character: </MemberCharacter>
      </CastMember>
    </CastList>
  );
};
export default Cast;
