//배열로 구현한 Set

function Set_Array() {
    this.size = 0;
    this.set = new Array();
}

Set_Array.prototype.search = function (val) {
    for (let i = 0; i < this.size; i++) {
        if (this.set[i] === val) return i;
    }

    return -1;
};

Set_Array.prototype.insert = function (val) {
    if (this.search(val) !== -1) return; //이미 삽입하고자 하는 원소가 있을 경우
    else this.set[this.size++] = val;
};

Set_Array.prototype.delete = function (val) {
    const index = this.search(val);

    if (index !== -1) {
        this.set[index] = this.set.pop();
        this.size--;
    }
};

const set = new Set_Array();
set.insert(1);
set.insert(1);
set.insert(1);
set.insert(2);
set.insert(3);
set.insert(4);
set.insert(5);
set.search(3);

set.delete(3);
set.delete(2);

console.log(set);
