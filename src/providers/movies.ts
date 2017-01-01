import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import $ from "jquery";

// import {request} from "tinyreq";

/*
Generated class for the Movies provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Movies {

  constructor(public http: Http) {
    console.log('Hello Movies Provider');

    // this.getDetails('http://putlockers.ch/watch-sing-online-free-putlocker.html');


  }


  today(page = 1) {
    console.log('Jelly TV!');

    return new Promise((res, rej) => {
      (function () {
        $.ajax({
          url: "http://localhost:8100/api/today/" + page,
          dataType: 'html',
          success: function(data) {

            let payload = [];

            let links = $(data).find('.content-box table:first-of-type tbody tr td a:has(img)');
            for (let a of links) {
              let images = $(a).find('img:first-of-type');
              let src = '';
              if (images.length > 0) {
                src = images[0].src;
              }
              payload.push({title: a.title, img: src, link: a.href});
            }
            res({data: payload});
          }
        });
      })();
    });
  }

  search(query, page = 1) {

    console.log('Search For', query);
    let baseURL = 'search/search.php?q=';


    // http://putlockers.ch/search/search.php?q=Batman
    return new Promise((res, rej) => {

      (function () {

        $.ajax({
          url: "http://localhost:8100/api/" + baseURL + encodeURIComponent(query) + "&sort=views&page=" + page,
          dataType: 'html',
          success: function(data) {
            let payload = [];

            let links = $(data).find('.content-box table:first-of-type tbody tr td a:has(img)');
            for (let a of links) {
              let images = $(a).find('img:first-of-type');
              let src = '';
              if (images.length > 0) {
                src = images[0].src;
              }
              payload.push({title: a.title, img: src, link: a.href});
            }

            console.log('search res', payload);
            res({results: payload});
            // res({results: []});



          }
        });
      })();


    });
  }



  getDetails(link) {


    console.log('Jelly TV!');
    // http://putlockers.ch/watch-sing-online-free-putlocker.html
    return new Promise((res, rej) => {


      (function () {

        let sublink = link.replace('http://putlockers.ch/','');
        $.ajax({
          url: "http://localhost:8100/api/" + sublink,
          dataType: 'html',
          success: function(data) {
            // let links = $(data).find('.content-box table:first-of-type tbody tr td a:has(img)');


            let similar = $(data).find('.content-box table:nth-last-of-type(2) tbody tr td a:has(img)');
            let recommended = $(data).find('.content-box table:nth-last-of-type(1) tbody tr td a:has(img)');
            let video = $(data).find('.video a')[0];


            let summary = $(data).find('.summary table tbody tr td:has(strong)');
            let payload = {summary:[], links:[], similar: [], recommended: []};
            console.log('Summary', summary);
            let links = $(data).find('.entry:has(a) a');
            console.log('Links', links);


            for (let a of similar) {

              let images = $(a).find('img:first-of-type');
              let src = '';
              if (images.length > 0) {
                src = images[0].src;
              }

              payload['similar'].push({title: a.title, img: src, link: a.href});
            }

            if (video != undefined) {
              payload['video'] = video.href;
          }
            for (let a of recommended) {

              let images = $(a).find('img:first-of-type');
              let src = '';
              if (images.length > 0) {
                src = images[0].src;
              }

              payload['recommended'].push({title: a.title, img: src, link: a.href});
            }


            for (let detail of summary) {
              payload['summary'].push(detail.innerText);
            }
            payload['about'] = payload['summary'].pop();

            for (let link of links) {
              payload['links'].push(link.href);
            }

            console.log(payload);
            res(payload);
          }
        });
      })();
    });
  }


  getMovies(page = 1) {
    console.log('Jelly TV!');

    return new Promise((res, rej) => {
      (function () {
        $.ajax({
          url: "http://localhost:8100/api/featured/" + page,
          dataType: 'html',
          success: function(data) {

            let payload = [];

            let links = $(data).find('.content-box table:first-of-type tbody tr td a:has(img)');
            for (let a of links) {
              let images = $(a).find('img:first-of-type');
              let src = '';
              if (images.length > 0) {
                src = images[0].src;
              }
              payload.push({title: a.title, img: src, link: a.href});
            }
            res({data: payload});
          }
        });
      })();
    });
  }
}
