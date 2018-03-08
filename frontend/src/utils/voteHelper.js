export function voteHelper (vote, voteScore) {
  if (vote === 'upVote') {
    return voteScore + 1
  } else if (vote === 'downVote') {
    return voteScore - 1
  }
}