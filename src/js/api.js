// 导出域名
export const domain = 'http://157.122.54.189:9095';

// 默认导出整个接口配置
export default {
    // 账号管理
    login: `/admin/account/login`,                               // 登陆
    logout: `/admin/account/logout`,                          // 登出
    islogin: `/admin/account/islogin`,                         // 是否登陆状态

    // 类别管理
    ctList: `/admin/category/getlist/`,                          // 获取分类列表, 需要参数: tablename
    ctDetail: `/admin/category/getcategorymodel/`,    // 获取分类详情, 需要参数: cateID
    ctEdit: `/admin/category/edit/`,                             // 编辑分类, 需要参数: cateID
    ctAdd: `/admin/category/add/`,                            // 添加分类, 需要参数: tablename

    // 文章管理
    atList: `/admin/article/getlist/`,                        // 获取文章列表, 需要参数: tablename, 需要查询: pageIndex 与 pageSize
    atCate: `/admin/article/getcategorylist/`,         // 获取文章的分类列表, 需要参数: tablename
    atDetail: `/admin/article/getarticle/`,               // 获取文章详情, 需要参数: tablename 与 atID
    atEdit: `/admin/article/edit/`,                          // 编辑文章, 需要参数: tablename 与 atID
    atDdd: `/admin/category/add/`,                      // 添加文章, 需要参数: tablename
    atDel: `/admin/category/del/`,                        // 删除文章, 需要参数: tablename 与 atID

    // 文章上传
    atImg: `/admin/article/uploadimg`,                 // 上传文章图片
    atFile: `/admin/article/uploadfile`,                    // 上传文章附件

    // 商品管理
    gsList: `/admin/goods/getlist/`,                       // 获取商品列表, 需要查询: pageIndex 与 pageSize 与 searchvalue
    gsDetail: `/admin/goods/getgoodsmodel/`,    // 获取商品详情, 需要参数: gsID
    gsEdit: `/admin/goods/edit/`,                         // 编辑商品, 需要参数: gsID
    gsAdd: `/admin/goods/add/`,                         // 添加商品
    gsDel: `/admin/goods/del/`,                           // 删除商品, 需要参数: gsID

    // 订单管理
    odList: `/admin/order/getorderlist`,                // 获取订单列表, 需要查询: pageIndex 与 pageSize 与 orderstatus 与 vipname
    odDetail: `/admin/order/getorderdetial/`,       // 获取订单详情, 需要参数: odID
    odEdit: `/admin/order/updateorder/` ,           // 编辑订单
}