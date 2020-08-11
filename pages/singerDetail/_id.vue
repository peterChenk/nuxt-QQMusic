<template>
  <div>
    <div class="main-content">
      <div class="mod_data">
        <span class="data__cover">
          <img :src="singerPhoto"
               onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
               alt="周杰伦"
               class="data__photo js_index">
        </span>
        <div class="data__cont">
          <div class="data__name">
            <h1 class="data__name_txt js_none_index"
                style="display:none;">
              <a class="js_goto_tab"
                 data-stat="y_new.singer.thistab.singer_name"
                 title="周杰伦"
                 data-tab="index"
                 href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html">周杰伦</a>
            </h1>
            <h1 class="data__name_txt js_index"
                title="周杰伦"> 周杰伦</h1>

          </div>

          <div class="data__desc"
               id="singer_desc">
            <div class="data__desc_txt"
                 id="short_desc">
              {{basicAndDesc}}
            </div>

            <a href="javascript:;"
               class="js_desc"
               data-left="0"
               data-stat="y_new.singer.header.more_info"
               data-top="0"
               @click="popup_data_detail = !popup_data_detail"
               data-target="popup_data_detail">[更多]</a>

            <a href="javascript:;"
               class="js_accusation"
               data-type="7"
               data-id="4558">[举报]</a>
          </div>

          <ul class="mod_data_statistic">

            <li class="data_statistic__item">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=song&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.song_tab"
                 data-tab="song"><span class="data_statistic__tit">单曲</span><strong class="data_statistic__number">838</strong></a>
            </li>

            <li class="data_statistic__item">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=album&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.album_tab"
                 data-tab="album"><span class="data_statistic__tit">专辑</span><strong class="data_statistic__number">35</strong></a>
            </li>

            <li class="data_statistic__item data_statistic__item--last">
              <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=mv&amp;"
                 class="js_goto_tab"
                 data-stat="y_new.singer.header.mv_tab"
                 data-tab="mv"><span class="data_statistic__tit">MV</span><strong class="data_statistic__number">1983</strong></a>
            </li>

          </ul>

          <div class="data__actions"
               role="toolbar">

            <a href="//y.qq.com/portal/player.html"
               class="mod_btn_green js_singer_radio"><i class="mod_btn_green__icon_play"></i>播放歌手热门歌曲</a>
            <a href="javascript:;"
               class="mod_btn js_follow"><i class="mod_btn__icon_more"
                 data-status="0"></i>关注 2399.9万</a>

          </div>
        </div>
      </div>

      <!--首页 begin-->
      <div class="js_tab"
           id="index_tab">

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">热门歌曲</h2>

            <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=song&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.song_all"
               data-tab="song">全部<i class="icon_part_arrow sprite"></i></a>

          </div>

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">时长</li>
            </ul>

            <ul class="songlist__list">

              <li mid="97773">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">1</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/w0026q7f01a.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/0039MnYb0qxYhV.html"
                         class="js_song"
                         title="晴天">晴天</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/000MkMni19ClKG.html"
                       title="叶惠美">叶惠美</a>

                  </div>
                  <div class="songlist__time">04:29</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="102065756">
                <div class="songlist__item songlist__item--even ">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">2</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/k0013x8ao6z.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/004Z8Ihr0JIu5s.html"
                         class="js_song"
                         title="七里香">七里香</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/003DFRzD192KKD.html"
                       title="七里香">七里香</a>

                  </div>
                  <div class="songlist__time">04:59</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="449205">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">3</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/l0013kgn1be.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/003aAYrm3GE0Ac.html"
                         class="js_song"
                         title="稻香">稻香</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/002Neh8l0uciQZ.html"
                       title="魔杰座">魔杰座</a>

                  </div>
                  <div class="songlist__time">03:43</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="107192078">
                <div class="songlist__item songlist__item--even ">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">4</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/u00222le4ox.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/003OUlho2HcRHC.html"
                         class="js_song"
                         title="告白气球">告白气球</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/003RMaRI1iFoYd.html"
                       title="周杰伦的床边故事">周杰伦的床边故事</a>

                  </div>
                  <div class="songlist__time">03:35</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="5105986">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">5</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/m00135c6uxe.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/001xd0HI0X9GNq.html"
                         class="js_song"
                         title="一路向北">一路向北<span class="songlist__song_txt">《头文字D》电影插曲</span></a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/002MAeob3zLXwZ.html"
                       title="J III MP3 Player">J III MP3 Player</a>

                  </div>
                  <div class="songlist__time">04:55</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="718477">
                <div class="songlist__item songlist__item--even ">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">6</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/T0010Rcobut.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/001zMQr71F1Qo8.html"
                         class="js_song"
                         title="夜曲">夜曲</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/0024bjiL2aocxT.html"
                       title="十一月的萧邦">十一月的萧邦</a>

                  </div>
                  <div class="songlist__time">03:46</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="268352018">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">7</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/q0034sb9eru.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/001glaI72k8BQX.html"
                         class="js_song"
                         title="Mojito">Mojito</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
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
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/0009C3rp3Kfwg0.html"
                       title="Mojito">Mojito</a>

                  </div>
                  <div class="songlist__time">03:05</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="237773700">
                <div class="songlist__item songlist__item--even ">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">8</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/t0032kwa29w.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/001qvvgF38HVc4.html"
                         class="js_song"
                         title="说好不哭（with 五月天阿信）">说好不哭（with 五月天阿信）</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/002gBTVk4JEE2T.html"
                       title="说好不哭（with 五月天阿信）">说好不哭（with 五月天阿信）</a>

                  </div>
                  <div class="songlist__time">03:42</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="102065750">
                <div class="songlist__item">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">9</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/x00135ao69x.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/001Bbywq2gicae.html"
                         class="js_song"
                         title="搁浅">搁浅</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/003DFRzD192KKD.html"
                       title="七里香">七里香</a>

                  </div>
                  <div class="songlist__time">04:00</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

              <li mid="102066257">
                <div class="songlist__item songlist__item--even ">
                  <div class="songlist__edit songlist__edit--check sprite">
                    <input type="checkbox"
                           class="songlist__checkbox">
                  </div>
                  <div class="songlist__number">10</div>
                  <div class="songlist__songname">

                    <i class="songlist__icon songlist__icon_exclusive sprite"
                       title="独家"></i>

                    <a href="//y.qq.com/n/yqq/mv/v/u0012xltd8y.html"
                       class="songlist__icon songlist__icon_mv sprite"
                       rel="noopener"
                       target="_blank"
                       title="MV"><span class="icon_txt">MV</span></a>

                    <span class="songlist__songname_txt"><a href="//y.qq.com/n/yqq/song/002hXDfk0LX9KO.html"
                         class="js_song"
                         title="听妈妈的话">听妈妈的话</a></span>
                    <div class="mod_list_menu">
                      <a href="//y.qq.com/portal/player.html"
                         class="list_menu__item list_menu__play js_play"
                         title="播放">
                        <i class="list_menu__icon_play"></i>
                        <span class="icon_txt">播放</span>
                      </a>
                      <a href="javascript:;"
                         class="list_menu__item list_menu__add js_fav"
                         title="添加到歌单"
                         aria-haspopup="true"
                         data-target="menu_add">
                        <i class="list_menu__icon_add"></i>
                        <span class="icon_txt">添加到歌单</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__down js_down"
                         title="VIP下载"
                         aria-haspopup="true"
                         data-target="menu_down">
                        <i class="list_menu__icon_down_vip"></i>
                        <span class="icon_txt">VIP下载</span>
                      </a>

                      <a href="javascript:;"
                         class="list_menu__item list_menu__share js_share"
                         title="分享"
                         aria-haspopup="true"
                         data-aria="menu_share">
                        <i class="list_menu__icon_share"></i>
                        <span class="icon_txt">分享</span>
                      </a>
                    </div>
                  </div>
                  <div class="songlist__album">

                    <a href="//y.qq.com/n/yqq/album/002jLGWe16Tf1H.html"
                       title="依然范特西">依然范特西</a>

                  </div>
                  <div class="songlist__time">04:25</div>
                  <div class="songlist__other">
                  </div>
                </div>
              </li>

            </ul>
          </div>
        </div>

        <div id="page_box">
          <div class="client_guide"
               id="limitButton">
            <p class="client_guide__txt">查看更多内容，请下载客户端</p><a href="javascript:;"
               class="client_guide__btn js_limitButton">立即下载</a>
          </div>
        </div>

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">专辑</h2>

            <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=album&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.album_all"
               data-tab="album">全部<i class="icon_part_arrow sprite"></i></a>

          </div>
          <div class="mod_playlist">
            <ul class="playlist__list"
                id="albumlist">
              <li class="playlist__item"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  data-albummid="0009C3rp3Kfwg0"
                  data-albumid="12924001">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/0009C3rp3Kfwg0.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       data-albummid="0009C3rp3Kfwg0"
                       data-albumid="12924001"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M0000009C3rp3Kfwg0_3.jpg?max_age=2592000"
                           alt="Mojito"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/0009C3rp3Kfwg0.html"
                         title="Mojito"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         data-albummid="0009C3rp3Kfwg0"
                         data-albumid="12924001">Mojito</a></span></h4>
                  <div class="playlist__other">
                    2020-06-12
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     data-mid="0009C3rp3Kfwg0"><span class="icon_txt">更多</span></a>
                </div>
              </li>

              <li class="playlist__item"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  data-albummid="001hGx1Z0so1YX"
                  data-albumid="9612009">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/001hGx1Z0so1YX.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       data-albummid="001hGx1Z0so1YX"
                       data-albumid="9612009"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001hGx1Z0so1YX_1.jpg?max_age=2592000"
                           alt="我是如此相信"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/001hGx1Z0so1YX.html"
                         title="我是如此相信"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         data-albummid="001hGx1Z0so1YX"
                         data-albumid="9612009">我是如此相信</a></span></h4>
                  <div class="playlist__other">
                    2019-12-15
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     data-mid="001hGx1Z0so1YX"><span class="icon_txt">更多</span></a>
                </div>
              </li>

              <li class="playlist__item"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  data-albummid="004fXSyj3bWTMN"
                  data-albumid="9040723">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/004fXSyj3bWTMN.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       data-albummid="004fXSyj3bWTMN"
                       data-albumid="9040723"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M000004fXSyj3bWTMN_1.jpg?max_age=2592000"
                           alt="周杰伦地表最强世界巡回演唱会"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/004fXSyj3bWTMN.html"
                         title="周杰伦地表最强世界巡回演唱会"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         data-albummid="004fXSyj3bWTMN"
                         data-albumid="9040723">周杰伦地表最强世界巡回演唱会</a></span></h4>
                  <div class="playlist__other">
                    2019-11-01
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     data-mid="004fXSyj3bWTMN"><span class="icon_txt">更多</span></a>
                </div>
              </li>

              <li class="playlist__item"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  data-albummid="002gBTVk4JEE2T"
                  data-albumid="7876962">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/002gBTVk4JEE2T.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       data-albummid="002gBTVk4JEE2T"
                       data-albumid="7876962"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M000002gBTVk4JEE2T_2.jpg?max_age=2592000"
                           alt="说好不哭（with 五月天阿信）"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/002gBTVk4JEE2T.html"
                         title="说好不哭（with 五月天阿信）"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         data-albummid="002gBTVk4JEE2T"
                         data-albumid="7876962">说好不哭（with 五月天阿信）</a></span></h4>
                  <div class="playlist__other">
                    2019-09-16
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     data-mid="002gBTVk4JEE2T"><span class="icon_txt">更多</span></a>
                </div>
              </li>

              <li class="playlist__item"
                  onmouseover="this.className=(this.className+' playlist__item--hover')"
                  onmouseout="this.className=this.className.replace(/ playlist__item--hover/, '')"
                  data-albummid="001CnPE31iJ899"
                  data-albumid="4044657">
                <div class="playlist__item_box">
                  <div class="playlist__cover mod_cover"><a href="https://y.qq.com/n/yqq/album/001CnPE31iJ899.html"
                       class="js_album"
                       data-stat="y_new.singer.index.album_pic"
                       data-albummid="001CnPE31iJ899"
                       data-albumid="4044657"><img src="//y.gtimg.cn/music/photo_new/T002R300x300M000001CnPE31iJ899_1.jpg?max_age=2592000"
                           alt="不爱我就拉倒"
                           onerror="this.src='//y.gtimg.cn/mediastyle/global/img/album_300.png?max_age=31536000';this.onerror=null;"
                           class="playlist__pic"><i class="mod_cover__icon_play js_play"
                         data-stat="y_new.singer.index.album_play"></i></a></div>
                  <h4 class="playlist__title"><span class="playlist__title_txt"><a href="https://y.qq.com/n/yqq/album/001CnPE31iJ899.html"
                         title="不爱我就拉倒"
                         class="js_album"
                         data-stat="y_new.singer.index.albumName"
                         data-albummid="001CnPE31iJ899"
                         data-albumid="4044657">不爱我就拉倒</a></span></h4>
                  <div class="playlist__other">
                    2018-05-15
                  </div>
                  <a href="javascript:;"
                     class="btn_operate_menu js_albumlist_more"
                     data-type="2"
                     data-mid="001CnPE31iJ899"><span class="icon_txt">更多</span></a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">MV</h2>

            <a href="//y.qq.com/n/yqq/singer/0025NhlN2yWrP4.html#tab=mv&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.mv_all"
               data-tab="mv">全部<i class="icon_part_arrow sprite"></i></a>

          </div>
          <div class="mod_mv">
            <ul class="mv_list__list"
                id="mvlist">
              <li class="mv_list__item"
                  data-vid="t0032kwa29w"
                  data-id="1568937">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/t0032kwa29w.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     data-vid="t0032kwa29w"
                     data-id="1568937"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M103000fHRU11gatzZ.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="说好不哭 (with 五月天阿信)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/t0032kwa29w.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       data-vid="t0032kwa29w"
                       data-id="1568937"
                       title="说好不哭 (with 五月天阿信)">说好不哭 (with 五月天阿信)</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>5640.1万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="u00222le4ox"
                  data-id="1053277">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/u00222le4ox.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     data-vid="u00222le4ox"
                     data-id="1053277"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M101000zvsVL4Bsi25.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="告白气球">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/u00222le4ox.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       data-vid="u00222le4ox"
                       data-id="1053277"
                       title="告白气球">告白气球</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>5007.2万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="b0020d8wsqm"
                  data-id="735295">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/b0020d8wsqm.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     data-vid="b0020d8wsqm"
                     data-id="735295"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M10100455M0Q1zPdCi.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="前世情人">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/b0020d8wsqm.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       data-vid="b0020d8wsqm"
                       data-id="735295"
                       title="前世情人">前世情人</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>2924.1万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="w0026q7f01a"
                  data-id="293791">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/w0026q7f01a.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     data-vid="w0026q7f01a"
                     data-id="293791"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M10100061J2t0b0PPW.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="晴天">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/w0026q7f01a.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       data-vid="w0026q7f01a"
                       data-id="293791"
                       title="晴天">晴天</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>3029.3万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="c0015vx9gdg"
                  data-id="303718">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/c0015vx9gdg.html#stat=y_new.singer.index.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.mv_play"
                     data-vid="c0015vx9gdg"
                     data-id="303718"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M1010038PR3p0hv1UL.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="算什么男人">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/c0015vx9gdg.html#stat=y_new.singer.index.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.mv_name"
                       data-vid="c0015vx9gdg"
                       data-id="303718"
                       title="算什么男人">算什么男人</a></h3>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>1764.8万</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mod_part">
          <div class="part__hd">
            <h2 class="part__tit">粉丝上传</h2> <a href="<%=  data.tools.getSingerUrl({mid:data.singerInfo.Fsinger_mid})%>#tab=fan&amp;"
               class="part__more js_goto_tab"
               data-stat="y_new.singer.index.fan.mv_all"
               data-tab="fan">全部<i class="icon_part_arrow sprite"></i></a>
          </div>
          <div class="mod_mv">
            <ul class="mv_list__list"
                id="mvfanlist">
              <li class="mv_list__item"
                  data-vid="k0026m921rg"
                  data-id="1455656">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/k0026m921rg.html#stat=y_new.singer.index.fan.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.fan.mv_play"
                     data-vid="k0026m921rg"
                     data-id="1455656"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M000000aU8j50DsNGF.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="黑色毛衣 (80s Remix)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/k0026m921rg.html#stat=y_new.singer.index.fan.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.fan.mv_name"
                       data-vid="k0026m921rg"
                       data-id="1455656"
                       title="黑色毛衣 (80s Remix)">黑色毛衣 (80s Remix)</a></h3>

                  <div class="mv_list__singer">
                    <a href="//y.qq.com/portal/profile.html?uin=on**#stat=y_new.singer.fan.uploader"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_user"
                       data-uin="on**"
                       data-stat="y_new.singer.fan.uploader"
                       title=""></a>
                  </div>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>8639</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="s00267gwhnv"
                  data-id="1452247">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/s00267gwhnv.html#stat=y_new.singer.index.fan.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.fan.mv_play"
                     data-vid="s00267gwhnv"
                     data-id="1452247"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M000000xofpj1VHmdK.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="周杰伦那些轻松欢快的歌曲 (饭制版)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/s00267gwhnv.html#stat=y_new.singer.index.fan.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.fan.mv_name"
                       data-vid="s00267gwhnv"
                       data-id="1452247"
                       title="周杰伦那些轻松欢快的歌曲 (饭制版)">周杰伦那些轻松欢快的歌曲 (饭制版)</a></h3>

                  <div class="mv_list__singer">
                    <a href="//y.qq.com/portal/profile.html?uin=on**#stat=y_new.singer.fan.uploader"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_user"
                       data-uin="on**"
                       data-stat="y_new.singer.fan.uploader"
                       title=""></a>
                  </div>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>7732</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="k0026mukrnh"
                  data-id="1449411">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/k0026mukrnh.html#stat=y_new.singer.index.fan.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.fan.mv_play"
                     data-vid="k0026mukrnh"
                     data-id="1449411"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M000003SrqIb2NBQHi.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="告白气球 (饭制版)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/k0026mukrnh.html#stat=y_new.singer.index.fan.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.fan.mv_name"
                       data-vid="k0026mukrnh"
                       data-id="1449411"
                       title="告白气球 (饭制版)">告白气球 (饭制版)</a></h3>

                  <div class="mv_list__singer">
                    <a href="//y.qq.com/portal/profile.html?uin=on**#stat=y_new.singer.fan.uploader"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_user"
                       data-uin="on**"
                       data-stat="y_new.singer.fan.uploader"
                       title=""></a>
                  </div>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>1.1万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="n0029cktxqx"
                  data-id="1504762">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/n0029cktxqx.html#stat=y_new.singer.index.fan.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.fan.mv_play"
                     data-vid="n0029cktxqx"
                     data-id="1504762"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M000001czeEA3K431g.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="告白气球 (央视2018春晚 2018/2/15)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/n0029cktxqx.html#stat=y_new.singer.index.fan.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.fan.mv_name"
                       data-vid="n0029cktxqx"
                       data-id="1504762"
                       title="告白气球 (央视2018春晚 2018/2/15)">告白气球 (央视2018春晚 2018/2/15)</a></h3>

                  <div class="mv_list__singer">
                    <a href="//y.qq.com/portal/profile.html?uin=on**#stat=y_new.singer.fan.uploader"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_user"
                       data-uin="on**"
                       data-stat="y_new.singer.fan.uploader"
                       title=""></a>
                  </div>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>54.8万</span></div>
                </div>
              </li>

              <li class="mv_list__item"
                  data-vid="p0025luaykp"
                  data-id="1445642">
                <div class="mv_list__item_box">
                  <a href="https://y.qq.com/n/yqq/mv/v/p0025luaykp.html#stat=y_new.singer.index.fan.mv_play"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="mv_list__cover mod_cover js_mv"
                     data-stat="y_new.singer.index.fan.mv_play"
                     data-vid="p0025luaykp"
                     data-id="1445642"
                     hidefocus="true">
                    <img class="mv_list__pic"
                         src="//y.gtimg.cn/music/photo_new/T015R640x360M101001oczvI2ZEKWm.jpg?max_age=2592000"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/mv_300.png?max_age=31536000';this.onerror=null;"
                         alt="等你下课 (伴奏版)">
                    <i class="mod_cover__icon_play"></i>
                  </a>
                  <h3 class="mv_list__title"><a href="https://y.qq.com/n/yqq/mv/v/p0025luaykp.html#stat=y_new.singer.index.fan.mv_name"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_mv"
                       data-stat="y_new.singer.index.fan.mv_name"
                       data-vid="p0025luaykp"
                       data-id="1445642"
                       title="等你下课 (伴奏版)">等你下课 (伴奏版)</a></h3>

                  <div class="mv_list__singer">
                    <a href="//y.qq.com/portal/profile.html?uin=on**#stat=y_new.singer.fan.uploader"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_user"
                       data-uin="on**"
                       data-stat="y_new.singer.fan.uploader"
                       title=""></a>
                  </div>

                  <div class="mv_list__info"><span class="mv_list__listen"><i class="mv_list__listen_icon sprite"></i>17.5万</span></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="mod_part"
             id="similar"
             style="">
          <div class="part__hd">
            <h2 class="part__tit">相似歌手</h2>
          </div>
          <div class="mod_singer_list">
            <ul class="singer_list__list">
              <li class="singer_list__item">
                <div class="singer_list__item_box">
                  <a href="https://y.qq.com/n/yqq/singer/000Sp0Bz4JXH0o.html#stat=y_new.singer.index.same_singers"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     data-mid="000Sp0Bz4JXH0o"
                     data-id="74"
                     title="五月天"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         src="//y.gtimg.cn/music/photo_new/T001R150x150M000000Sp0Bz4JXH0o.jpg?max_age=2592000"
                         alt="五月天">
                  </a>
                  <h3 class="singer_list__title"><a href="https://y.qq.com/n/yqq/singer/000Sp0Bz4JXH0o.html#stat=y_new.singer.index.same_singers"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       data-mid="000Sp0Bz4JXH0o"
                       data-id="74"
                       title="五月天">五月天</a></h3>
                </div>
              </li>

              <li class="singer_list__item">
                <div class="singer_list__item_box">
                  <a href="https://y.qq.com/n/yqq/singer/001f0VyZ1hmWZ1.html#stat=y_new.singer.index.same_singers"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     data-mid="001f0VyZ1hmWZ1"
                     data-id="11606"
                     title="林宥嘉"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         src="//y.gtimg.cn/music/photo_new/T001R150x150M000001f0VyZ1hmWZ1.jpg?max_age=2592000"
                         alt="林宥嘉">
                  </a>
                  <h3 class="singer_list__title"><a href="https://y.qq.com/n/yqq/singer/001f0VyZ1hmWZ1.html#stat=y_new.singer.index.same_singers"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       data-mid="001f0VyZ1hmWZ1"
                       data-id="11606"
                       title="林宥嘉">林宥嘉</a></h3>
                </div>
              </li>

              <li class="singer_list__item">
                <div class="singer_list__item_box">
                  <a href="https://y.qq.com/n/yqq/singer/001JDzPT3JdvqK.html#stat=y_new.singer.index.same_singers"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     data-mid="001JDzPT3JdvqK"
                     data-id="265"
                     title="王力宏"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         src="//y.gtimg.cn/music/photo_new/T001R150x150M000001JDzPT3JdvqK.jpg?max_age=2592000"
                         alt="王力宏">
                  </a>
                  <h3 class="singer_list__title"><a href="https://y.qq.com/n/yqq/singer/001JDzPT3JdvqK.html#stat=y_new.singer.index.same_singers"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       data-mid="001JDzPT3JdvqK"
                       data-id="265"
                       title="王力宏">王力宏</a></h3>
                </div>
              </li>

              <li class="singer_list__item">
                <div class="singer_list__item_box">
                  <a href="https://y.qq.com/n/yqq/singer/001BLpXF2DyJe2.html#stat=y_new.singer.index.same_singers"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     data-mid="001BLpXF2DyJe2"
                     data-id="4286"
                     title="林俊杰"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         src="//y.gtimg.cn/music/photo_new/T001R150x150M000001BLpXF2DyJe2.jpg?max_age=2592000"
                         alt="林俊杰">
                  </a>
                  <h3 class="singer_list__title"><a href="https://y.qq.com/n/yqq/singer/001BLpXF2DyJe2.html#stat=y_new.singer.index.same_singers"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       data-mid="001BLpXF2DyJe2"
                       data-id="4286"
                       title="林俊杰">林俊杰</a></h3>
                </div>
              </li>

              <li class="singer_list__item">
                <div class="singer_list__item_box">
                  <a href="https://y.qq.com/n/yqq/singer/003Nz2So3XXYek.html#stat=y_new.singer.index.same_singers"
                     onclick="setStatCookie&amp;&amp;setStatCookie();"
                     class="singer_list__cover js_singer"
                     data-stat="y_new.singer.index.same_singers"
                     data-mid="003Nz2So3XXYek"
                     data-id="143"
                     title="陈奕迅"
                     hidefocus="true">
                    <img class="singer_list__pic"
                         onerror="this.src='//y.gtimg.cn/mediastyle/global/img/singer_300.png?max_age=31536000';this.onerror=null;"
                         src="//y.gtimg.cn/music/photo_new/T001R150x150M000003Nz2So3XXYek.jpg?max_age=2592000"
                         alt="陈奕迅">
                  </a>
                  <h3 class="singer_list__title"><a href="https://y.qq.com/n/yqq/singer/003Nz2So3XXYek.html#stat=y_new.singer.index.same_singers"
                       onclick="setStatCookie&amp;&amp;setStatCookie();"
                       class="js_singer"
                       data-stat="y_new.singer.index.same_singers"
                       data-mid="003Nz2So3XXYek"
                       data-id="143"
                       title="陈奕迅">陈奕迅</a></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!--首页 end-->

      <!-- 单曲tab begin -->
      <div class="mod_part_detail js_tab"
           id="song_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">单曲 838</h2>
        </div>

        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过单曲</p>
        </div>
        <div class="js_content">
          <div class="mod_songlist_toolbar">
            <a href="//y.qq.com/portal/player.html"
               class="mod_btn js_all_play"
               data-stat="y_new.singer.song.playall"><i class="mod_btn__icon_play"></i>播放全部</a>
            <a href="javascript:;"
               class="mod_btn js_all_fav"
               data-stat="y_new.singer.song.addall"><i class="mod_btn__icon_add"></i>添加到</a>
            <a href="javascript:;"
               class="mod_btn js_all_down"
               data-stat="y_new.singer.song.downloadall"><i class="mod_btn__icon_down"></i>下载</a>
            <a href="javascript:;"
               class="mod_btn js_batch"
               data-stat="y_new.singer.song.batch"><i class="mod_btn__icon_batch"></i>批量操作</a>
          </div>

          <div class="mod_songlist">
            <ul class="songlist__header">
              <li class="songlist__edit songlist__edit--check sprite">
                <input type="checkbox"
                       class="songlist__checkbox js_check_all">
              </li>
              <li class="songlist__header_name">歌曲</li>
              <li class="songlist__header_album">专辑</li>
              <li class="songlist__header_time">时长</li>
            </ul>

            <ul class="songlist__list"
                id="song_box">
            </ul>
          </div>
        </div>
      </div>
      <!-- 单曲tab end -->

      <!-- 专辑tab begin -->
      <div class="mod_part_detail js_tab"
           id="album_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">专辑 35</h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过专辑</p>
        </div>
        <div class="mod_playlist js_content">
          <ul class="playlist__list"
              id="album_box">
          </ul>
        </div>
      </div>
      <!-- 专辑tab end -->

      <!-- MV tab begin -->
      <div class="mod_part_detail js_tab"
           id="mv_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit">MV 1983</h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手还没有发表过MV</p>
        </div>
        <div class="mod_mv js_content">
          <ul class="mv_list__list"
              id="mv_box">
          </ul>
        </div>
      </div>
      <!-- MV tab end -->

      <!-- Fan MV tab begin -->
      <div class="mod_part_detail js_tab"
           id="fan_tab"
           style="display:none;">
        <div class="part_detail__hd">
          <h2 class="part_detail__tit"></h2>
        </div>
        <div class="none_txt"
             style="display:none;">
          <i class="none_txt__symbol"></i>
          <p>该歌手下还没有发表过爱豆视频</p>
        </div>
        <div class="mod_mv js_content">
          <ul class="mv_list__list"
              id="fan_box">
          </ul>
        </div>
      </div>
      <!-- Fan MV tab end -->

      <!-- 专辑简介 -->
      <div class="popup_data_detail"
          v-if="popup_data_detail"
           id="popup_data_detail"
           data-aria="popup"
           style="z-index:10000000000;">
        <div class="popup_data_detail__cont">
          <h3 class="popup_data_detail__tit">歌手简介</h3>
          {{basicAndDesc}}
        </div>
        <i class="popup_data_detail__arrow"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      singerDesc: {},
      basicAndDesc: '',
      singerPhoto: '',
      popup_data_detail: false
    }
  },
  async asyncData ({ app, params }) {
    let singerPhoto = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${params.id}.jpg?max_age=2592000`
    let singerDesc = []
    let basicAndDesc = []
    let res = await app.$api.singerDesc(params.id)
    if (res.data.result === 100) {
      singerDesc = res.data.data
      let str = []
      let str2 = []
      singerDesc.basic.item.forEach(ele => {
        str.push({'ele': ele.key + ':' + ele.value})
      })
      str.forEach(ele => {
        str2.push(ele.ele)
      })
      let basic = str2.join()
      basicAndDesc = basic + singerDesc.desc
    }
    return {
      singerDesc,
      basicAndDesc,
      singerPhoto
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  @import "~/assets/scss/singer_detail.css";
  @import "~/assets/scss/layout.css";
  .popup_data_detail{
    top: 128px;
    right: 85px;
  }
  .popup_data_detail__arrow{
    top: -11px;
    right: 65px;
    background-position: -11px 0!important;
    width: 17px;
    height: 11px;
  }
</style>