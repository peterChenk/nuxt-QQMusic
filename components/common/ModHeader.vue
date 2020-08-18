<template>
  <div class="mod_header" @click="drop = false">
    <div class="section_inner">
      <h1 class="qqmusic_title">
        <a href="https://y.qq.com/">
          <img srcset="//y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x"
            src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1" alt="QQ音乐" class="qqmusic_logo">
        </a>
      </h1>
      <!-- 导航 S -->
      <ul class="mod_top_nav" role="nav">
        <li class="top_nav__item">
          <a href="//y.qq.com" class="top_nav__link top_nav__link--current" title="音乐馆">音乐馆</a>
        </li>
        <li class="top_nav__item">
          <a href="/portal/profile.html" class="top_nav__link" title="我的音乐">我的音乐</a>
        </li>
        <li class="top_nav__item top_nav__item--subnav">
          <a href="//y.qq.com/download/index.html" class="top_nav__link js_toDownload" title="客户端" rel="noopener"
            target="_blank">客户端</a>
          <img src="http://y.gtimg.cn/mediastyle/yqq/extra/mark_1.png" class="top_nav__mark">
          <!-- <div class="popup_data_detail client_privilege">
            <div class="popup_data_detail__cont">
              <p><i class="client_privilege__icon client_privilege__icon--hq"></i>HQ高品质 全员开启</p>
              <p><i class="client_privilege__icon client_privilege__icon--dts"></i>独家音效 全面升级</p>
              <p><i class="client_privilege__icon client_privilege__icon--skin"></i>轻盈视觉 动态皮肤</p>
              <a href="javascript:;" class="client_privilege__btn" id="top_pop_download">下载体验</a>
            </div>
          </div> -->
        </li>
        <li class="top_nav__item">
          <a href="//y.qq.com/artists" data-stat="y_new.top.artists" class="top_nav__link js_nav_click" title="开放平台"
            rel="noopener" target="_blank">开放平台</a>
        </li>
        <li class="top_nav__item">
          <a href="//y.qq.com/portal/vipportal/index.html" class="top_nav__link" title="VIP" rel="noopener"
            target="_blank">VIP</a>
        </li>
      </ul>
      <ul class="mod_top_subnav">
        <!-- <li class="top_subnav__item" v-for="(item,index) in subnavItems" @click="slective = index" :key="index">
          <a :href="item.href" :class="{'top_subnav__link--current': slective===index}">{{item.text}}</a>
        </li> -->
        <nuxt-link v-for="(item) in subnavItems" :key="item.id" :to="item.link" tag="li" class="top_subnav__item">
          <a :href="item.href" :class="{'top_subnav__link--current': item.link === routePath}">{{item.text}}</a>
        </nuxt-link>
      </ul>
      <!-- 导航 E -->
      <div class="mod_top_search" role="search">
        <div class="mod_search_input">
          <input class="search_input__input" @click.stop="drop = true" aria-label="请输入搜索内容" type="text"
            placeholder="搜索音乐、MV、歌单、用户" accesskey="s">
          <button class="search_input__btn"><i class="icon_search sprite"></i><span class="icon_txt">搜索</span></button>
        </div>
        <div class="js_smartbox">
          <div class="mod_search_other" :class="{'drop': drop}">
            <div class="search_hot">
              <dl class="search_hot__list" aria-labelledy="search_hot__tit">
                <dt class="search_hot__tit">热门搜索</dt>
                <dd>
                  <a href="javascript:;" class="search_hot__link js_smartbox_search js_left" data-name="我们的歌"
                    v-for="(item, index) in searchHotList" :key="item.k">
                    <span class="search_hot__number">{{index + 1}}</span>
                    <span class="search_hot__name">{{item.k}}</span>
                    <span class="search_hot__listen">{{(item.n / 10000).toFixed(2)}}万</span>
                  </a>
                </dd>
              </dl>
            </div>
            <div class="search_history">
              <dl class="search_history__list">
                <dt class="search_history__tit">搜索历史<a href="javascript:;"
                    class="search_history__clear js_smartbox_delete_all"><i class="icon_history_clear"></i><span
                      class="icon_txt">清空</span></a></dt>

                <dd class="search_history__item">
                  <a href="javascript:;" class="search_history__link js_smartbox_search js_left"
                    data-name="告白气球">告白气球</a>
                  <a href="javascript:;" class="search_history__delete js_smartbox_delete" data-name="告白气球"
                    title="删除"><i class="search_history__icon_delete"></i><span class="icon_txt">删除</span></a>
                </dd>

              </dl>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div class="header__opt">
        <!-- 未登录 -->
        <span class="mod_top_login">
          <a class="top_login__link js_logined" href="//y.qq.com/portal/profile.html#stat=y_new.top.user_pic"
            onclick="setStatCookie&amp;&amp;setStatCookie();" style="display:none;">
            <img src="//y.gtimg.cn/mediastyle/global/img/person_300.png?max_age=2592000" class="top_login__cover"
              alt="">
          </a>
          <a class="top_login__link js_login" data-stat="y_new.top.login" href="javascript:;">
            登录
          </a>

          <a class="login__link header__link js_login" data-stat="y_new.top.login" href="javascript:;">登录</a>
          <a class="mod_btn_green top_login__btn_vip js_openvip" data-aid="music.pc.20316.newyqqtop"
            data-stat="music.20316.btnclick.pc" href="javascript:;">开通绿钻豪华版</a>
          <a class="mod_btn top_login__btn_vip js_openmusic" data-aid="music.pc.20317.newyqqtop"
            data-stat="music.20317.btnclick.pc" href="javascript:;">开通付费包</a>
        </span>
        <!-- 用户信息 -->
        <div class="popup_user">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "modHeader",
    data: function () {
      return {
        navItems: [],
        subnavItems: [{
            link: "/",
            text: "首页"
          },
          {
            link: "/singer",
            text: "歌手"
          },
          {
            link: "/newDisc",
            text: "新碟"
          },
          {
            link: "/leaderboard",
            text: "排行榜"
          },
          {
            link: "/playlist",
            text: "分类歌单"
          },
          {
            link: "/radio",
            text: "电台"
          },
          {
            link: "/mv",
            text: "MV"
          }
          // {
          //   link: "https://y.qq.com/portal/album_mall.html",
          //   text: "数字专辑"
          // },
          // {
          //   // link: "https://y.qq.com/portal/piao_wu.html",
          //   link: '/playlistDetail',
          //   text: "票务"
          // }
        ],
        slective: 0,
        drop: false,
        searchHotList: []
      }
    },
    computed: {
      routePath() {
        return this.$route.path || '/'
      }
    },
    created() {
      // this.getSearchHot()
    },
    methods: {
      async getSearchHot() {
        const res = await this.$api.getSearchHot()
        if (res.data.result === 100) {
          this.searchHotList = res.data.data.slice(0, 5)
        }
      }
    }
  };

</script>
<style lang="scss" scoped>
  .mod_header {
    background-color: #fff;
    position: relative;
    z-index: 4;

    a {
      color: #000;
      text-decoration: none;
    }

    .section_inner {
      padding-top: 90px;
    }

    .qqmusic_title {
      position: absolute;
      left: 0;
      top: 22px;

      .qqmusic_logo {
        width: 170px;
        height: 46px;
      }
    }

    .mod_top_nav {
      position: absolute;
      left: 198px;
      top: 0;

      .top_nav__item {
        position: relative;
        float: left;
        margin-right: -5px;
      }

      .top_nav__link {
        display: block;
        padding: 0 20px;
        line-height: 90px;
        height: 90px;
        text-align: center;
        font-size: 18px;
      }

      .top_nav__link--current,
      .top_nav__link--current:hover {
        background-color: #31c27c;
        color: #fff;
      }

      .top_nav__mark {
        position: absolute;
        top: 18px;
        right: 0;
        height: 14px;
      }
    }

    .mod_top_subnav {
      height: 51px;
      line-height: 51px;
      border-top: 1px solid #f2f2f2;
      padding-left: 230px;
      margin-right: -50px;

      .top_subnav__item {
        float: left;
        font-size: 15px;
        color: #c1c1c1;
        margin-right: 47px;
        cursor: pointer;
      }

      .top_subnav__link--current {
        color: #31c27c;
      }

      .top_subnav__link {
        display: block;
      }
    }

    .mod_top_search {
      position: absolute;
      top: 0;
      right: 284px;

      .mod_search_input {
        border: 1px solid #c9c9c9;
        padding: 0 33px 0 11px;
        line-height: 36px;
        height: 36px;
        margin-top: 26px;
        position: relative;
        border-radius: 3px;
        background-color: #fff;
        -webkit-transition: width .6s ease-out;
        transition: width .6s ease-out;

        .search_input__input {
          width: 174px;
          height: 36px;
          border: 0 none;
          font-size: 14px;
          background: 0 0;
          -webkit-transition: width .6s ease-out, visibility .6s 1ms ease-out;
          transition: width .6s ease-out, visibility .6s 1ms ease-out;
        }

        .search_input__btn {
          position: absolute;
          top: 0;
          right: 0;
          border: 0 none;
          width: 38px;
          height: 35px;
          overflow: visible;
          background: 0 0;
          cursor: pointer;

          .icon_search {
            position: absolute;
            top: 50%;
            right: 11px;
            margin-top: -8px;
            width: 16px;
            height: 16px;
            background-position: 0 -40px;
          }
        }
      }

      .js_smartbox {
        .mod_search_other {
          position: absolute;
          top: 63px;
          left: 0;
          background: #FFF;
          width: 218px;
          border: 1px solid #c9c9c9;
          z-index: 8;
          text-align: left;
          font-size: 14px;
          line-height: 36px;

          .search_hot {
            padding: 5px 0;

            .search_hot__tit {
              display: none;
            }

            .search_hot__link {
              display: block;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .search_hot__link {
              padding-left: 11px;
              padding-right: 11px;
            }

            .search_hot__link span {
              cursor: pointer;
            }

            .search_hot__number {
              color: #ff4222;
              float: left;
              width: 18px;
            }

            .search_hot__name {
              float: left;
              color: #333;
              max-width: 140px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

            .search_hot__listen {
              float: right;
              color: #999;
              font-size: 12px;
            }
          }

          .search_history {
            padding: 5px 0;
            border-bottom: 1px solid #f2f2f2;

            .search_history__link,
            .search_history__tit {
              padding-left: 11px;
            }

            .search_history__clear {
              position: absolute;
              top: 0;
              right: 0;
              width: 40px;
              height: 36px;
              font-size: 2px;
              text-align: center;
            }

            .search_history__item {
              position: relative;
            }

            .search_history__tit {
              color: #999;
              position: relative;
            }

            .search_history__clear {
              position: absolute;
              top: 0;
              right: 0;
              width: 40px;
              height: 36px;
              font-size: 2px;
              text-align: center;

              .icon_history_clear {
                position: absolute;
                top: 50%;
                right: 11px;
                margin-top: -8px;
                width: 16px;
                height: 16px;
                background-position: -100px 0;
              }
            }
          }
        }

        .drop {
          visibility: visible;
          max-height: 800px;
          -webkit-transition: max-height .6s ease-out;
          transition: max-height .6s ease-out;
        }

      }
    }

    .header__opt {
      position: absolute;
      top: 0;
      right: 0;
      height: 90px;
      line-height: 90px;

      .mod_top_login {
        font-size: 0;
        height: 90px;
        line-height: 90px;

        .top_login__link {
          position: relative;
          font-size: 16px;
          float: left;
          width: 38px;
          margin-right: 10px;
          text-align: center;
        }

        .mod_btn,
        .mod_btn_green {
          border-radius: 2px;
          font-size: 14px;
          margin-right: 6px;
          padding: 0 23px;
          height: 38px;
          line-height: 38px;
          display: inline-block;
          white-space: nowrap;
          box-sizing: border-box;
          overflow: hidden;
        }

        .top_login__btn_vip {
          line-height: 39px;
        }

        .top_login__btn_vip {
          margin-top: 24px;
          padding: 0 9px;
          margin-left: 10px;
          margin-right: 0;
          font-size: 13px;
        }

        .mod_btn_green {
          border: 1px solid #31c27c;
          background-color: #31c27c;
          color: #fff;
        }

        .mod_btn {
          border: 1px solid #c9c9c9;
          color: #000;
        }


      }

      .popup_user {
        position: absolute;
        right: 0;
        top: 90px;
        width: 288px;
        background-color: #fff;
        z-index: 9;
        line-height: 1.5;
        border: 1px solid #f2f2f2;
        font-size: 13px;
      }
    }
  }

</style>
