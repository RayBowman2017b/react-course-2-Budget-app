@rem zjtest.bat
@rem

@rem set jest_config=/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/jest.config.json
 set jest_config=jest.config.json
@rem set test_app=/aaa_TransZ_DT201607/Ralph/Udemy/C023_Complete_React_Web_Dev/Sections/SEC_012_Testing_Your_Application/proj_02/Budget-app
 set test_app=/A01_Udemy/C023_Complete_React_Web_Dev/Budget-app

@rem  yarn run jest  %test_app% --config=%jest_config%  --watch
yarn run jest  %test_app% --config=%jest_config%

pause
