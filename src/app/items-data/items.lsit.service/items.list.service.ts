/**
 * Created by pthomas on 6/15/2017.
 */
export class ItemsList {
  menuList: [{name: string, company: string, status: string}] = [
    {
      name: 'Phone',
      company: 'Samsung',
      status: 'Available'
    },
    {
      name: 'Laptop',
      company: 'Dell',
      status: 'Available'
    },
    {
      name: 'Mouse',
      company: 'Dell',
      status: 'Not Available'
    }];



onItemAdded(newItem: {name: string, company: string, status: string}) {
  this.menuList.push(newItem);
}

onStatusChange(id: number, status: string) {
  this.menuList[id].status = status;
}
}
