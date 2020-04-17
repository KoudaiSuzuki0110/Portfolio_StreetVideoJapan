'use strict'

// jQuary処理
$(function(){

    // home.html
    // サブ画面クリック時にメイン画面に映像を反映する
    // サブ画面マウスオーバー時
    $('.subvideo').on('mouseover', function(){

        // 選択されているサブ画面を強調
        $(this).css('border', '5px solid black').css('background', 'black')
        .css('width', '165px').css('height', '110px');

    // サブ画面マウスアウト時
    }).on('mouseout', function(){
        // サブ画面の装飾を基に戻す
        $(this).css('border', '1px solid #8B008B').css('background', '#8B008B')
        .css('width', '150px').css('height', '100px');

    })

    // サブ画面クリック時
    $('.subvideo').on('click', function(){

        // クリックされた映像をメイン画面に反映
        $('.mainvideo').attr('src', $(this).attr('src'));

    })


    // profile.html
    // 選択した言語でテキストを表示
    // フッターの言語をクリックした時
    $('.profile-lang ul li').on('click', function(){

        // Englishクリック時の処理
        if($(this).attr('id') === 'english'){

            // Englishクリック時テキスト非表示だった場合の処理
            if($('#etext').attr('class') === 'hidden'){
                // 日本語表示から英語表示に切り替え
                $('#etext').removeClass('hidden')
                $('#jtext').addClass('hidden');
            // Englishクリック時テキストがすでに表示されている場合の処理
            }else{
                // 何もしない
                ;
            }

        // Japaneseクリック時の処理
        }else if($(this).attr('id') === 'japanese'){

            // Japaneseクリック時テキスト非表示だった場合の処理
            if($('#jtext').attr('class') === 'hidden'){
                // 英語表示から日本語表示に切り替え
                $('#jtext').removeClass('hidden')
                $('#etext').addClass('hidden');
            // Japaneseクリック時テキストがすでに表示されている場合の処理
            }else{
                // 何もしない
                ;
            }

        }

    });


    // product.html
    // 映像のアコーディオンリスト
    // 映像タイトルのみ表示(映像は隠しておく)
    $('dd').css('display','none');

    // 映像タイトルをクリックした時
    $('dl dt').on('click', function(){

        // クリックしたタイトルの次の要素(=タイトルに関連する映像)が表示されていない場合
        if($(this).next().css('display')=='none'){
            // 原則ddは全てslideUpメソッドにより非表示になる
            $('dd').slideUp('slow');
            // クリックしたタイトルの次の要素(=タイトルに関連する映像)のみは表示される
            $(this).next().slideDown('slow');
        // 表示済タイトルをクリックした時に閉じる処理
        }else{
            $('dd').slideUp('slow');
        }

    });

});