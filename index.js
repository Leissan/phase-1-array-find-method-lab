// code your solution here
function superbowlWin(record){
    let yearWin=record.find(element=>element.result==="W")
    if (yearWin){
        return yearWin.year
    }
}
  
  superbowlWin(record)
