

function getDataFromServerProvince() {
  return {"errcode":0,"省份列表":[{"省份":"重庆市","人数":127},{"省份":"河南省","人数":231},{"省份":"陕西省","人数":152},{"省份":"安徽省","人数":129},{"省份":"青海省","人数":34},{"省份":"湖北省","人数":159},{"省份":"香港特别行政区","人数":3},{"省份":"台湾省","人数":3},{"省份":"贵州省","人数":105},{"省份":"山东省","人数":187},{"省份":"黑龙江省","人数":112},{"省份":"海南省","人数":28},{"省份":"福建省","人数":110},{"省份":"北京市","人数":375},{"省份":"吉林省","人数":110},{"省份":"云南省","人数":149},{"省份":"四川省","人数":141},{"省份":"浙江省","人数":101},{"省份":"上海市","人数":30},{"省份":"江西省","人数":161},{"省份":"广东省","人数":86},{"省份":"河北省","人数":208},{"省份":"江苏省","人数":104},{"省份":"新疆维吾尔自治区","人数":94},{"省份":"西藏自治区","人数":22},{"省份":"湖南省","人数":165},{"省份":"内蒙古自治区","人数":108},{"省份":"甘肃省","人数":77},{"省份":"辽宁省","人数":105},{"省份":"广西壮族自治区","人数":63},{"省份":"山西省","人数":150},{"省份":"天津市","人数":77},{"省份":"宁夏回族自治区","人数":38},{"省份":"澳门特别行政区","人数":1}]};
// $.get('http://yingxin.info.bit.edu.cn/studentData/proviceHadRegister',function(res) {
//   console.log(res)
// })
}

function dataFactoryProvince(ret_data) {
  let output = []
  output = getPercentMaxTen(ret_data["省份列表"])

  return output;
}



let ret =  {"errcode":0,"省份列表":[{"省份":"重庆市","人数":127},{"省份":"河南省","人数":231},{"省份":"陕西省","人数":152},{"省份":"安徽省","人数":129},{"省份":"青海省","人数":34},{"省份":"湖北省","人数":159},{"省份":"香港特别行政区","人数":3},{"省份":"台湾省","人数":3},{"省份":"贵州省","人数":105},{"省份":"山东省","人数":187},{"省份":"黑龙江省","人数":112},{"省份":"海南省","人数":28},{"省份":"福建省","人数":110},{"省份":"北京市","人数":375},{"省份":"吉林省","人数":110},{"省份":"云南省","人数":149},{"省份":"四川省","人数":141},{"省份":"浙江省","人数":101},{"省份":"上海市","人数":30},{"省份":"江西省","人数":161},{"省份":"广东省","人数":86},{"省份":"河北省","人数":208},{"省份":"江苏省","人数":104},{"省份":"新疆维吾尔自治区","人数":94},{"省份":"西藏自治区","人数":22},{"省份":"湖南省","人数":165},{"省份":"内蒙古自治区","人数":108},{"省份":"甘肃省","人数":77},{"省份":"辽宁省","人数":105},{"省份":"广西壮族自治区","人数":63},{"省份":"山西省","人数":150},{"省份":"天津市","人数":77},{"省份":"宁夏回族自治区","人数":38},{"省份":"澳门特别行政区","人数":1}]};

let total_num_province = {"贵州省": 104, "河南省": 208, "山东省": 194, "四川省": 136, "江苏省": 105, "青海省": 35, "新疆维吾尔自治区": 118, "福建省": 104, "浙江省": 103, "湖北省": 161, "天津市": 75, "江西省": 142, "西藏自治区": 17, "黑龙江省": 103, "广东省": 87, "香港特别行政区": 18, "北京市": 549, "台湾省": 2, "澳门特别行政区": 3, "云南省": 170, "广西壮族自治区": 69, "陕西省": 153, "甘肃省": 76, "河北省": 206, "吉林省": 111, "重庆市": 122, "宁夏回族自治区": 36, "湖南省": 164, "安徽省": 125, "内蒙古自治区": 109, "上海市": 32, "山西省": 148, "海南省": 28, "辽宁省": 102};

var ret_data = ret['省份列表']

function getArray(obj,arr_prop) {
	var arr_obj = [];
	let len = arr_prop.length;
	for(let i = 0; i < len; i++) {
		arr_obj.push({
			name: arr_prop[i],
			val: obj[arr_prop[i]]
		})
	}
	return arr_obj;
}

function getPercentMaxTen(arr) {
	let arr_len = arr.length;
	for(let i = 0; i < arr_len; i++) {
		arr[i]['人数'] = parseInt(arr[i]['人数']) / total_num_province[arr[i]['省份']] * 100;
		arr[i]['人数'] = arr[i]['人数'].toFixed(2)
	}
	arr.sort(function(a,b) {
		if(a['人数'] > b['人数']) {
			return -1;
		} else if(a['人数'] < b['人数']) {
			return 1;
		} else {
			return 0;
		}
	});
	let ret = [];
	for(let i = 0; i < 10; i++) {
		ret.push(arr[i])
	}
	return ret;
}

// for(let i = 0; i < province_list.length; i++) {
// 	ret_data[province_list[i]] = parseInt(Math.random()*50+10)
// }

let province_data = dataFactoryProvince(getDataFromServerProvince());

let province_content = [];

let province_data_len = province_data.length;

// for(let i = 0; i < province_data_len; i++) {
for(let i = 0; i < 5; i++) {
	province_content.push('<tr><td>'+(i+1)+'</td><td>'+province_data[i]['省份']+'</td><td>'+province_data[i]['人数']+'%</td></tr>')
}

$('#table-tbody-province').html(province_content.join(''))