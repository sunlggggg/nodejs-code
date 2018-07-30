// leetcode 
// 2. Add Two Numbers
// using linkedlist 
function ListNode(val) {
    this.val = val;
    this.next = null;
    console.log(this)
}

function main(){
    var list ;
    list =  new ListNode(1);
    list.next =  new ListNode(2);
    list.next.next =  new ListNode(3);

    //output 
    var cur = list;
    while(cur !== null){
        console.log(cur.val)
        cur = cur.next;
    }
}
main();