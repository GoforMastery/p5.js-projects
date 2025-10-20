/*IDEA:
case 1 : probab of ace in cards = 4 / 52 = 1 / 13
         then you reshuffle now they are independent so again 
         probab of ace in cards = 4 / 52 = 1 / 13
         P(two aces with reshuffle) = (1 / 13) * (1 / 13)

case 2 : probab of ace in cards = 4 / 52 = 1 / 13
         then you dont reshuffle that is 
         one ace is gone and one card is fixed....
         i.e, we just have probability based on 3 out of 51
         P(two aces without reshuffle) = (1 / 13) * (3 / 51)



*/

function solve() {
  let F = 1 / 13;
  let reshuffle = 1 / 13;
  let noshuffle = 3 / 51;
  console.log(F * reshuffle);
  console.log(F * noshuffle);
}
solve();
