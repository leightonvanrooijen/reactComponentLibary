import styled from "styled-components"

const StyledSkeletonPulse = styled("div")`
  display: inline-block;
  height: 100%;
  width: 100%;

  background-size: 400% 400%;
  animation: loading 1s linear infinite alternate;

  @keyframes loading {
    0% {
      background-color: ${({ theme }) => theme.color.skeletonBackground};
    }
    100% {
      background-color: ${({ theme }) => theme.color.skeletonBackground100};
    }
  }
`

const StyledSkeleton = styled(StyledSkeletonPulse)<SkeletonProps>`
  margin-bottom: 5px;
  width: ${({ width }) => width ?? "100%"};
  height: ${({ height }) => height ?? "100%"};
  border-radius: ${({ theme }) => theme.border.radius200};

  &::before {
    content: "\\00a0";
  }
`

type SkeletonProps = {
  height?: string
  width?: string
}

export const Skeleton = (props: SkeletonProps) => {
  return <StyledSkeleton {...props} />
}
