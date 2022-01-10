const addrContents = document.getElementsByClassName('inner_addr');

for (let i = 0; i < addrContents.length; ++i) {
    const infoCenter = addrContents[i].getElementsByClassName('info_center')[0].children.item(1);
    const engInfo = addrContents[i].getElementsByClassName('addrEngInfo')[1];

    const newDetail = document.createElement('span');
    newDetail.style.color = 'red';
    newDetail.style.paddingLeft = '5px';
    newDetail.innerHTML = infoCenter.innerHTML;

    engInfo.parentNode.insertBefore(newDetail, engInfo);
}