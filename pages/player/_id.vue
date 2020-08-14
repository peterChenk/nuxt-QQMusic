<template>
  <div style="background-color: rgb(128, 128, 128);">
    <h1 class="player_logo"><a href="//y.qq.com/#stat=y_new.player.header.logo"
         onclick="setStatCookie&amp;&amp;setStatCookie();"
         rel="noopener"
         target="_blank"><img class="player_logo__pic"
             srcset="//y.gtimg.cn/mediastyle/yqq/img/player_logo@2x.png 2x"
             src="//y.gtimg.cn/mediastyle/yqq/img/player_logo.png"
             alt="QQ音乐"></a></h1>
    <div class="mod_player_login">
      <div class="player_login__guide">
        QQ音乐，千万高品质曲库尽享
        <a href="javascript:;"
           class="player_login__guide_btn js_floatLayer_download"><i class="player_login__guide_icon sprite"></i>客户端下载</a>
      </div>
      <span id="player_login"
            style="display:none;">
        <a class="player_login__link"
           href="javascripr:;">
        </a>
        <a href="javascript:;"
           class="player_login__out js_logout"
           data-stat="y_new.player.header.logout">退出</a>
        <a class="player_login__link player_login__link--set js_opts_login"
           href="javascript:;"><span class="player_login__txt">设置</span></a>
      </span>
      <a class="player_login__link player_login__link--unlogin js_login"
         data-stat="y_new.player.header.login"
         href="javascript:;">
        <span class="player_login__txt">登录</span>
      </a>
      <a class="player_login__link player_login__link--set js_opts_unlogin"
         href="javascript:;"><span class="player_login__txt">设置</span></a>
    </div>

    <div class="mod_player">
      <div class="player__hd"></div>
      <div class="player__bd">
        <!-- 默认 -->
        <div class="player_style_normal js_box js_full_box"
             style="display:;">
          <div class="mod_songlist_toolbar">
            <a href="javascript:;"
               class="mod_btn js_all_like"
               data-stat="y_new.player.songlist.loveall"><i class="mod_btn_green__icon_like"></i>收藏<span class="mod_btn__border"></span></a>
            <a href="javascript:;"
               class="mod_btn js_all_fav"
               data-stat="y_new.player.songlist.addall"><i class="mod_btn_green__icon_add"></i>添加到<span class="mod_btn__border"></span></a>
            <a href="javascript:;"
               class="mod_btn js_all_down"
               data-stat="y_new.player.songlist.downloadall"><i class="mod_btn_green__icon_down"></i>下载<span class="mod_btn__border"></span></a>
            <a href="javascript:;"
               class="mod_btn js_all_delete"
               data-stat="y_new.player.songlist.deleteall"><i class="mod_btn_green__icon_delete"></i>删除<span class="mod_btn__border"></span></a>
            <a href="javascript:;"
               class="mod_btn js_all_deleted"
               data-stat="y_new.player.songlist.deleteallonce"><i class="mod_btn_green__icon_clear"></i>清空列表<span class="mod_btn__border"></span></a>
          </div>
          <div class="sb_scrollable sb_main sb_viewport">

            <!-- 主要内容_S -->
            <div class="sb_overview"
                 style="height: 272px;">

              <!-- 编辑模式 mod_songlist--edit -->
              <div class="mod_songlist mod_songlist--edit">
                <i class="player_songlist__line"></i>
                <ul class="songlist__header">
                  <li class="songlist__edit sprite">
                    <input type="checkbox"
                           class="songlist__checkbox js_check_all"
                           data-stat="y_new.player.songlist.checkall">
                  </li>
                  <li class="songlist__header_name">歌曲</li>
                  <li class="songlist__header_author">歌手</li>
                  <li class="songlist__header_time">时长</li>
                </ul>
                <i class="player_songlist__line"></i>
                <ul class="songlist__list"
                    id="song_box">
                  <li mid="272125057"
                      ix="0"
                      data-page="player"
                      data-stat="y_new.player.songlist.dbclick">
                    <div class="songlist__item">
                      <div class="songlist__edit sprite">
                        <input type="checkbox"
                               class="songlist__checkbox">
                      </div>
                      <div class="songlist__number">1</div>
                      <div class="songlist__songname">
                        <span class="songlist__songname_txt"
                              title="天外来物">天外来物</span>
                        <div class="mod_list_menu">
                          <a href="javascript:;"
                             class="list_menu__item list_menu__play js_play"
                             data-stat="y_new.player.songlist.playone"
                             data-page="player"
                             title="播放"><i class="list_menu__icon_play"></i><span class="icon_txt">播放</span></a>
                          <a href="javascript:;"
                             class="list_menu__item list_menu__add js_fav"
                             data-stat="y_new.player.songlist.addone"
                             title="添加到歌单"
                             aria-haspopup="true">
                            <i class="list_menu__icon_add"></i>
                            <span class="icon_txt">添加到歌单</span>
                          </a>

                          <a href="javascript:;"
                             class="list_menu__item list_menu__down js_down"
                             title="下载"
                             aria-haspopup="true"
                             data-target="menu_down">
                            <i class="list_menu__icon_down"></i>
                            <span class="icon_txt">下载</span>
                          </a>

                          <a href="javascript:;"
                             class="list_menu__item list_menu__share js_share"
                             data-stat="y_new.player.songlist.shareone"
                             title="分享"
                             aria-haspopup="true">
                            <i class="list_menu__icon_share"></i>
                            <span class="icon_txt">分享</span>
                          </a>
                        </div>
                      </div>

                      <div class="songlist__artist"
                           title="薛之谦">

                        <a href="https://y.qq.com/n/yqq/singer/002J4UUk29y8BY.html"
                           data-singermid="002J4UUk29y8BY"
                           data-singerid="5062"
                           title="薛之谦"
                           data-stat="y_new.player.songlist.singername"
                           class="singer_name"
                           data-page="player">薛之谦</a>

                      </div>
                      <div class="songlist__time">04:17</div>
                      <div class="songlist__other">

                      </div>
                      <a href="javascript:;"
                         class="songlist__delete js_delete"
                         data-page="player"
                         data-stat="y_new.player.songlist.delete"
                         title="删除"><span class="icon_txt">删除</span></a>
                      <i class="player_songlist__line"></i>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- 主要内容_E -->
            <!-- 模拟滚动条 S -->
            <div class="scroll_area sb vertical"
                 style="display:none;">
              <div class="scroll_bg sb_bg">
                <div class="scroll_bg_cont sb_bg_cont"></div>
              </div>
              <div class="scroll_bar sb_thumb"
                   style="height:0px;">
                <div class="scroll_bar_cont sb_thumb_cont"
                     style="height:0px;"></div>
              </div>
            </div>
            <!-- 模拟滚动条 E -->
          </div>

          <div class="mod_song_info"
               id="song_info">
            <div class="song_info__info">
              <a href="javascirpt:;"
                 class="song_info__cover js_album"
                 data-stat="y_new.player.info_area.albumpic">
                <img src="https://y.gtimg.cn/music/photo_new/T002R300x300M000000MKKJW0TJaQf.jpg?max_age=2592000"
                     id="song_pic"
                     alt=""
                     class="song_info__pic">
              </a>
              <div class="song_info__name"
                   id="song_name">歌曲名：<a href="https://y.qq.com/n/yqq/song/0013WPvt4fQH2b.html#stat=y_new.player.info_area.songname"
                   onclick="setStatCookie&amp;&amp;setStatCookie();"
                   title="天外来物"
                   target="_blank">天外来物</a></div>
              <div class="song_info__singer"
                   id="singer_name">歌手名：<a href="https://y.qq.com/n/yqq/singer/002J4UUk29y8BY.html#stat=y_new.player.info_area.singername"
                   onclick="setStatCookie&amp;&amp;setStatCookie();"
                   title="薛之谦"
                   class="js_singer"
                   data-stat="y_new.player.info_area.singername"
                   data-singermid="002J4UUk29y8BY"
                   rel="noopener nofollow"
                   target="_blank">薛之谦</a></div>
              <div class="song_info__album"
                   id="album_name">专辑名：<a href="https://y.qq.com/n/yqq/album/000MKKJW0TJaQf.html#stat=y_new.player.info_area.albumname"
                   onclick="setStatCookie&amp;&amp;setStatCookie();"
                   title="天外来物"
                   target="_blank">天外来物</a></div>
            </div>
            <div class="song_info__lyric">
              <div class="song_info__lyric_box js_lyric_box">
                <!-- 控制song_info__lyric_inner来做滚动 -->
                <div class="song_info__lyric_inner qrc_ctn"
                     id="qrc_ctn"
                     data-mod="1"
                     style="transition: -webkit-transform 0.1s ease-out 0s; transform: translateY(-13.6px);">
                  <p data-id="line_null">&nbsp;</p>
                  <p data-id="line_0"
                     class="">天外来物 - 薛之谦</p>
                  <p data-id="line_1">词：薛之谦</p>
                  <p data-id="line_2"
                     class="on">曲：罗小黑</p>
                  <p data-id="line_3">你降落的 太突然了</p>
                  <p data-id="line_4">我刚好呢 又路过了</p>
                  <p data-id="line_5">机会难得 又主观觉得</p>
                  <p data-id="line_6">想明抢 又碰不得</p>
                  <p data-id="line_7">你带来了 我的快乐</p>
                  <p data-id="line_8">让这世界 有点颜色</p>
                  <p data-id="line_9">我好想指责 你太随意了</p>
                  <p data-id="line_10">宝物该有人捧着 你是不是我的</p>
                  <p data-id="line_11">你像 天外来物一样 求之不得</p>
                  <p data-id="line_12">你在世俗里的名字 不重要了</p>
                  <p data-id="line_13">正好 我隐藏的人格是契而不舍</p>
                  <p data-id="line_14">直到蜂拥而至的人都透明了</p>
                  <p data-id="line_15">我在 不近又不远处</p>
                  <p data-id="line_16">用明天换你 靠近我</p>
                  <p data-id="line_17">你占领了 我的快乐</p>
                  <p data-id="line_18">和这世界 已没有瓜葛</p>
                  <p data-id="line_19">任事物干渴 都褪去颜色</p>
                  <p data-id="line_20">只有你是天蓝色 我开始找你了</p>
                  <p data-id="line_21">会像 天外来物一样 失而复得</p>
                  <p data-id="line_22">你在世俗里的名字 被人用了</p>
                  <p data-id="line_23">反正 我隐藏的人格是契而不舍</p>
                  <p data-id="line_24">直到蜂拥而至的人都透明了</p>
                  <p data-id="line_25">我在 不近又不远处</p>
                  <p data-id="line_26">用明天换你 靠近我</p>
                  <p data-id="line_27">你就像 天外来物一样 求之不得</p>
                  <p data-id="line_28">我在世俗里的描写被取笑了</p>
                  <p data-id="line_29">反正我隐藏的人格是非你不可</p>
                  <p data-id="line_30">直到别有用心的人都透明了</p>
                  <p data-id="line_31">我在 不近又不远处</p>
                  <p data-id="line_32">用明天换你 靠近我</p>
                  <p data-id="line_33">制作人：周以力/郑伟</p>
                  <p data-id="line_34">编曲：周以力</p>
                  <p data-id="line_35">吉他：张淞</p>
                  <p data-id="line_36">大提琴：郎莹</p>
                  <p data-id="line_37">鼓：褚伟明</p>
                  <p data-id="line_38">bass：努而德柯</p>
                  <p data-id="line_39">人声录制：郑伟/夏之炜/吴身宝</p>
                  <p data-id="line_40">人声编辑：郑伟</p>
                  <p data-id="line_41">人声录音棚：上海广播大厦200studio</p>
                  <p data-id="line_42">乐器录音棚：soundhub studio</p>
                  <p data-id="line_43">混音：全相彦 @OK master studio</p>
                  <p data-id="line_44">母带：全相彦 @OK master studio</p>
                </div>
              </div>
            </div>
            <a href="javascript:;"
               class="btn_lang btn_lang--select js_trans_btn"
               style="display:none;"><i class="icon_txt">开启音译歌词</i></a>
          </div>
        </div>

        <!-- 纯净模式 -->
        <div class="player_style_only js_box js_simp_box"
             style="display:none;">
          <div class="mod_only_lyric js_lyric_box">
            <!-- 控制only_lyric__inner来做滚动 -->
            <div class="only_lyric__inner qrc_ctn"
                 data-mod="2">
              <p data-id="line_null">&nbsp;</p>
              <p data-id="line_0">天外来物 - 薛之谦</p>
              <p data-id="line_1">词：薛之谦</p>
              <p data-id="line_2">曲：罗小黑</p>
              <p data-id="line_3">你降落的 太突然了</p>
              <p data-id="line_4">我刚好呢 又路过了</p>
              <p data-id="line_5">机会难得 又主观觉得</p>
              <p data-id="line_6">想明抢 又碰不得</p>
              <p data-id="line_7">你带来了 我的快乐</p>
              <p data-id="line_8">让这世界 有点颜色</p>
              <p data-id="line_9">我好想指责 你太随意了</p>
              <p data-id="line_10">宝物该有人捧着 你是不是我的</p>
              <p data-id="line_11">你像 天外来物一样 求之不得</p>
              <p data-id="line_12">你在世俗里的名字 不重要了</p>
              <p data-id="line_13">正好 我隐藏的人格是契而不舍</p>
              <p data-id="line_14">直到蜂拥而至的人都透明了</p>
              <p data-id="line_15">我在 不近又不远处</p>
              <p data-id="line_16">用明天换你 靠近我</p>
              <p data-id="line_17">你占领了 我的快乐</p>
              <p data-id="line_18">和这世界 已没有瓜葛</p>
              <p data-id="line_19">任事物干渴 都褪去颜色</p>
              <p data-id="line_20">只有你是天蓝色 我开始找你了</p>
              <p data-id="line_21">会像 天外来物一样 失而复得</p>
              <p data-id="line_22">你在世俗里的名字 被人用了</p>
              <p data-id="line_23">反正 我隐藏的人格是契而不舍</p>
              <p data-id="line_24">直到蜂拥而至的人都透明了</p>
              <p data-id="line_25">我在 不近又不远处</p>
              <p data-id="line_26">用明天换你 靠近我</p>
              <p data-id="line_27">你就像 天外来物一样 求之不得</p>
              <p data-id="line_28">我在世俗里的描写被取笑了</p>
              <p data-id="line_29">反正我隐藏的人格是非你不可</p>
              <p data-id="line_30">直到别有用心的人都透明了</p>
              <p data-id="line_31">我在 不近又不远处</p>
              <p data-id="line_32">用明天换你 靠近我</p>
              <p data-id="line_33">制作人：周以力/郑伟</p>
              <p data-id="line_34">编曲：周以力</p>
              <p data-id="line_35">吉他：张淞</p>
              <p data-id="line_36">大提琴：郎莹</p>
              <p data-id="line_37">鼓：褚伟明</p>
              <p data-id="line_38">bass：努而德柯</p>
              <p data-id="line_39">人声录制：郑伟/夏之炜/吴身宝</p>
              <p data-id="line_40">人声编辑：郑伟</p>
              <p data-id="line_41">人声录音棚：上海广播大厦200studio</p>
              <p data-id="line_42">乐器录音棚：soundhub studio</p>
              <p data-id="line_43">混音：全相彦 @OK master studio</p>
              <p data-id="line_44">母带：全相彦 @OK master studio</p>
            </div>
          </div>
          <a href="javascript:;"
             class="btn_lang btn_lang--select js_trans_btn"
             style="display:none;"><i class="icon_txt">开启音译歌词</i></a>
        </div>
      </div>
      <div class="player__ft"
           id="opbanner">
        <a href="javascript:;"
           class="btn_big_prev"
           title="alt+←"><span class="icon_txt">上一首</span></a>
        <a href="javascript:;"
           class="btn_big_play"
           id="btnplay"
           title="[空格]"><span class="icon_txt">播放</span></a>
        <a href="javascript:;"
           class="btn_big_next"
           title="alt+→"><span class="icon_txt">下一首</span></a>
        <div class="player_music">
          <div class="player_music__info"
               id="sim_song_info"><a href="https://y.qq.com/n/yqq/song/0013WPvt4fQH2b.html#stat=y_new.player.info_area.songname"
               onclick="setStatCookie&amp;&amp;setStatCookie();"
               title="天外来物"
               class="js_song"
               data-stat="y_new.player.info_area.songname"
               data-mid="0013WPvt4fQH2b"
               data-id="272125057"
               data-songtype="0"
               data-disstid=""
               rel="noopener nofollow"
               target="_blank">天外来物</a> - <a href="https://y.qq.com/n/yqq/singer/002J4UUk29y8BY.html#stat=y_new.player.info_area.singername"
               onclick="setStatCookie&amp;&amp;setStatCookie();"
               title="薛之谦"
               class="js_singer"
               data-stat="y_new.player.info_area.singername"
               data-singermid="002J4UUk29y8BY"
               rel="noopener nofollow"
               target="_blank">薛之谦</a></div>
          <div class="player_music__time"
               id="time_show">00:02 / 04:17</div>
          <div class="player_progress"
               id="progress">
            <div class="player_progress__inner"
                 id="spanplayer_bgbar"
                 title="[快进ctrl+alt+→][快退ctrl+alt+←]">
              <div class="player_progress__load"
                   id="downloadbar"
                   style="width: 10%;"></div>
              <div class="player_progress__play"
                   style="width:0%;"
                   id="spanplaybar"><i class="player_progress__dot"
                   id="spanprogress_op"></i></div>
            </div>
          </div>
        </div>
        <div>
          <a href="javascript:;"
             class="btn_big_style_list"
             id="play_mod"
             title="列表循环[O]"><span class="icon_txt">列表循环[O]</span></a>
        </div>
        <a href="javascript:;"
           class="btn_big_like js_btn_fav"
           title="喜欢[V]"><span class="icon_txt">喜欢[V]</span></a>
        <a href="javascript:;"
           class="btn_big_down js_btn_down"
           title="下载[D]"><span class="icon_txt">下载[D]</span></a>
        <a class="mod_btn_comment js_into_comment btn_comment99"
           data-stat="y_new.player.gotocomment"
           href="https://y.qq.com/n/yqq/song/0013WPvt4fQH2b.html#comment_box"
           style=""
           target="_blank"><span class="btn_comment__numbers"><i class="btn_comment__numb btn_comment__numb_9"></i><i class="btn_comment__numb btn_comment__numb_9"></i><i class="btn_comment__numb btn_comment__numb_9"></i><i class="btn_comment__numb btn_comment__numb_add"></i></span><span class="icon_txt">评论</span></a>
        <a href="javascript:;"
           class="btn_big_only"
           id="simp_btn"
           title="打开纯净模式[C]"><span class="icon_txt">打开纯净模式[C]</span></a>
        <!-- <a href="javascript:;" class="btn_big_only btn_big_only--on"><span class="icon_txt">关闭纯净模式</span></a> -->
        <div class="player_progress player_voice"
             id="voice">
          <a href="javascript:;"
             class="btn_big_voice"
             id="spanmute"
             title="关闭声音[M]"><span class="icon_txt">关闭声音[M]</span></a>
          <!-- <a href="javascript:;" class="btn_big_voice btn_big_voice--no"><span class="icon_txt">打开声音</span></a> -->
          <div class="player_progress__inner"
               id="spanvolume"
               title="调节音量 [增大alt+↑][减小alt+↓]">
            <div class="player_progress__play"
                 style="width: 75%;"
                 id="spanvolumebar"><i class="player_progress__dot"
                 id="spanvolumeop"></i></div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg_player_mask"></div>
    <div class="bg_player"
         style="background-image: url(&quot;https://y.gtimg.cn/music/photo_new/T002R300x300M000000MKKJW0TJaQf.jpg?max_age=2592000&quot;);"
         id="backImg"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
@import "~/assets/scss/player.css";
@import "~/assets/scss/layout.css";
</style>