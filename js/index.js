$(function () {
    // $('.current').find('.i').css('background', 'skyblue')

    getAllHero('')

    //获取全部英雄
    function getAllHero(job) {
        $.ajax({
            url: 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js',
            type: 'get',
            dataType: 'json',
            data: {},
            success: (res) => {
                // console.log(res)
                // const {roles}=res.hero[0]
                // console.log(roles)

                //全部英雄
                const {hero} = res;
                // const htmlStr = template('t1', {list: res.hero})
                // $('.list').html(htmlStr)

                //遍历
                //法师
                (function () {
                    console.log(111);
                    let arr = []
                    $.each(hero, function (i, n) {
                        console.log(JSON.stringify(n.roles).indexOf(job))
                        if (JSON.stringify(n.roles).indexOf(job) != -1) {
                            arr.push(n);
                            const htmlStr = template('t1', {list: arr})
                            $('.list').html(htmlStr)
                        }
                    })
                })()
            }
        })
    }

    //选中
    $('#seleteChecklist .selete-item').click(function () {
        // console.log(this);
        $(this).addClass('current').siblings('.selete-item').removeClass('current');
    })
    //all
    $('.all').click(function () {
        getAllHero('')
    })
    //战士
    $('.fighter').click(function () {
        getAllHero('fighter')
    })

    //法师
    $('.mage').click(function () {
        getAllHero('mage')
    })

    //刺客
    $('.assassin').click(function () {
        getAllHero('assassin')
    })

    //坦克
    $('.tank').click(function () {
        getAllHero('tank')
    })

    //射手
    $('.marksman').click(function () {
        getAllHero('marksman')
    })

    //辅助
    $('.support').click(function () {
        getAllHero('support')
    })
})