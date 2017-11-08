/**
 * Created by pthomas on 6/16/2017.
 */
export class ObserverService {
  dataList = 100;
    //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20];
  count= 0;
  getData() {
    this.count++;
    this.dataList++;
    console.log('Count value= ' + this.count);
    return this.dataList;
  }
}
