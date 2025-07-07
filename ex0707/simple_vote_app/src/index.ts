// 순서도 1.옵션을 정의 -> 함수를 이용해서 옵션 값 받아옴 -> 이벤트 발생 함수

// 투표 항목 name과 득표수 number
interface VoteOption {
  name: string,
  votes: number;
}

// 인터페이스가 {} 로해서 return {}로 받아한다. 리턴값 모두를 받아야함
function createVoteOption(name: string): VoteOption {
  return {
    name,
    votes: 0
  }
}

// 투표 함수
function vote(option: VoteOption): void {
  option.votes += 1;
  console.log(`${option.name}에 투표완료, 현재 투표 수 : ${option.votes}`)
}

// 투표수 조회 하는 함수
// 입력으로 VoteOption []을 받아서 리턴은 없음(void) -> 
// option을 사용 배열로 받음(배열을 만든다) 리턴x
// 안에서 모든 투표 투표수를 콘솔에 출력
// function getVoteResult(arr:number[] ,option:VoteOption) :void{
//   console.log('\n--- 현재 투표 현황 ---')
//   console.log(`첫번째 투표 : 10표`)
//   option.votes +=1;
//   console.log(`${arr.push(option.votes)}`)
// }

// 다른 풀이
function getVoteResult(options: VoteOption[]): void {
  console.log('\n--- 현재 투표 현황 ---')
  options.forEach(option => {
    console.log(`${option.name}:${option.votes}표`)
  })
  console.log('----------------------')
}

// 모든(all) 투표의 최고(max) 투표 항목을 찾아서 반환하는 함수
// 동점일 경우 첫 번째 항목을 반환
// 진행 중인 투표가 없는 경우 null
// 입력으로 VoteOption []
// 내 생각 
// 1. 각 항목당 투표값들 더함 -> 옵션이 여러개 있어야함
// 2. 비교를 하며 높은것을 찾는다 -> 매개변수에 만든 옵션들을 비교한다
// 3. 최댓값이 나왔는데 그 값이 2개를 가지면 첫번째로 가져옴 -> 적어도 비교 해야할거 3개이상 만들기
// 3. 진행 중인 투표가 없다 -> 끝 -> null
function getWinner(options: VoteOption[]): VoteOption | null {
  if (options.length === 0) {
    return null;
  }

  let winner = options[0];
  for (let a = 0; a < options.length; a++) {
    if (winner.votes < options[a].votes) {
      winner = options[a];
    }
  }
  return winner;
}

function main(): void{
  // 투표 항목
  const menuOptions : VoteOption[] = [
    createVoteOption('김치찌개'),
    createVoteOption('된장찌개'),
    createVoteOption('제육볶음'),
    createVoteOption('돈까스')
  ]

  // 투표 진행
  vote(menuOptions[0])
  vote(menuOptions[2])
  vote(menuOptions[0])
  vote(menuOptions[3])
  vote(menuOptions[2])
  vote(menuOptions[0])

  // 현재 투표 현황 출력
  getVoteResult(menuOptions);

  // 최종 우승 항목
  const winner = getWinner(menuOptions);
  if(winner){
    console.log(`오늘의 점심 메뉴는 바로... ${winner.name}입니다! (${winner.votes}표)`)
  }else{
    console.log(`아직 투표된 항목이 없습니다`)
  }
}
main();