# 📌 Issue Tracker in Team 29

## 🏃‍♀️🏃‍♂️ 팀원

|   J009   |   J058   |   J159   |   J212   |
| -------- | -------- | -------- | -------- |
|  [고병화](https://github.com/bbbyung2)   |  [김하균](https://github.com/hagyun93)   |  [이준희](https://github.com/GodDrinkTeJAVA)   |  [하이현](https://github.com/hyh1016)   |

## 데모 링크
http://www.tutoringmachine.shop/issue

## Git Branch Strategy

* master : 제품으로 출시될 수 있는 브랜치
* develop : 다음 출시 버전을 개발하는 브랜치
* feature : 기능을 개발하는 브랜치
* release : 이번 출시 버전을 준비하는 브랜치
* hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## 팀 그라운드 룰 ⚠️

[Team Ground Rule](https://github.com/boostcamp-2020/IssueTracker-29/wiki/%5BGROUP-29%5D-Team-Groud-Rule)


## 데일리 스크럼 기록

[WEEK1](https://github.com/boostcamp-2020/IssueTracker-29/wiki/%5BWEEK1%5D-%EB%8D%B0%EC%9D%BC%EB%A6%AC-%EC%8A%A4%ED%81%AC%EB%9F%BC-%EA%B8%B0%EB%A1%9D)

## 기능 요구사항 목록

[기능 요구사항 목록](https://github.com/boostcamp-2020/IssueTracker-29/wiki/%EA%B8%B0%EB%8A%A5-%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%AA%A9%EB%A1%9D)

## 개발 Stack

### Development Aid
* Babel
* ESLint
* Webpack

### Back-End
* Express
* mySQL
* passport-github2
* GitHub OAuth APP
* JSON WEB Token

### Front-End
* React

## Project Build & Run (develop)

### Server
```
cd server
npm install
npm start
```

- Express를 통해 실행되며, 포트는 3000번으로 지정된다.
- MySQL과 jwt, passport에 대한 환경 변수는 config/.env 파일을 통해 설정한다.
```
// config/.env
DB_USER=
DB_PASSWD=
DB_NAME=
DB_HOST=
JWT_SECRET_KEY=
GITHUB_OAUTH_CLIENTID=
GITHUB_OAUTH_SECRET=
GITHUB_OAUTH_CALLBACK=
```

### Client
```
cd client
npm install
npm run dev
```

- Webpack Dev Server를 통해서 실행되며, 포트는 8080으로 지정된다.
