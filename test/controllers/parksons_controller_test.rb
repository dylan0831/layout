require 'test_helper'

class ParksonsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @parkson = parksons(:one)
  end

  test "should get index" do
    get parksons_url
    assert_response :success
  end

  test "should get new" do
    get new_parkson_url
    assert_response :success
  end

  test "should create parkson" do
    assert_difference('Parkson.count') do
      post parksons_url, params: { parkson: {  } }
    end

    assert_redirected_to parkson_url(Parkson.last)
  end

  test "should show parkson" do
    get parkson_url(@parkson)
    assert_response :success
  end

  test "should get edit" do
    get edit_parkson_url(@parkson)
    assert_response :success
  end

  test "should update parkson" do
    patch parkson_url(@parkson), params: { parkson: {  } }
    assert_redirected_to parkson_url(@parkson)
  end

  test "should destroy parkson" do
    assert_difference('Parkson.count', -1) do
      delete parkson_url(@parkson)
    end

    assert_redirected_to parksons_url
  end
end
